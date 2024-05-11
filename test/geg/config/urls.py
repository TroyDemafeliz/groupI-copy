# ruff: noqa
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include
from django.urls import path
from django.views import defaults as default_views
from django.views.generic import TemplateView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from backend.users import views

urlpatterns = [
    path("", TemplateView.as_view(template_name="pages/home.html"), name="home"),
    path(
        "about/",
        TemplateView.as_view(template_name="pages/about.html"),
        name="about",
    ),
    # Django Admin, use {% url 'admin:index' %}
    path(settings.ADMIN_URL, admin.site.urls),
    # User management
    path("users/", include("backend.users.urls", namespace="users")),
    path("accounts/", include("allauth.urls")),
    path("backend/user/register/", views.CreateUserView.as_view(), name="register"),
    path("backend/token/", TokenObtainPairView.as_view(), name="get_token"),
    path("backend/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    path("backend-auth/", include("rest_framework.urls")),
    
    path("backend/Booking/", view=views.DisplayBooking.as_view(), name='Bookings'),
    path("backend/Booking/create/", view=views.CreateBooking.as_view(), name='CreateBookings'),
    path("backend/Booking/delete/<int:pk>/", view=views.DeleteBooking.as_view(), name='DeleteBookings'),
    path("backend/Booking/update/<int:pk>/", view=views.UpdateBooking.as_view(), name='UpdateBookings'),
    
    path("backend/Project/", view=views.DisplayProject.as_view(), name='Projects'),
    path("backend/Project/create/", view=views.CreateProject.as_view(), name='CreateProjects'),
    path("backend/Project/delete<int:pk>/", view=views.DeleteProject.as_view(), name='DeleteProjects'),
    path("backend/Project/update/<int:pk>/", view=views.UpdateProject.as_view(), name='UpdateProjects'),
    
    path("backend/Service/", view=views.DisplayService.as_view(), name='Services'),
    path("backend/Service/create/", view=views.CreateService.as_view(), name='CreateServices'),
    path("backend/Service/delete/<int:pk>/", view=views.DeleteService.as_view(), name='DeleteServices'),
    path("backend/Service/update/<int:pk>/", view=views.UpdateService.as_view(), name='UpdateServices'),
    
    
    # Your stuff: custom urls includes go here
    # ...
    # Media files
    *static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT),
]


if settings.DEBUG:
    # This allows the error pages to be debugged during development, just visit
    # these url in browser to see how these error pages look like.
    urlpatterns += [
        path(
            "400/",
            default_views.bad_request,
            kwargs={"exception": Exception("Bad Request!")},
        ),
        path(
            "403/",
            default_views.permission_denied,
            kwargs={"exception": Exception("Permission Denied")},
        ),
        path(
            "404/",
            default_views.page_not_found,
            kwargs={"exception": Exception("Page not Found")},
        ),
        path("500/", default_views.server_error),
    ]
    if "debug_toolbar" in settings.INSTALLED_APPS:
        import debug_toolbar

        urlpatterns = [path("__debug__/", include(debug_toolbar.urls))] + urlpatterns
