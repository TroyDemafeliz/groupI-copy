from django.urls import path

from django.conf.urls.static import static
from django.conf import settings



from . import views

from .views import user_detail_view
from .views import user_redirect_view
from .views import user_update_view

app_name = "users"
urlpatterns = [
    path("~redirect/", view=user_redirect_view, name="redirect"),
    path("~update/", view=user_update_view, name="update"),
    path("<str:username>/", view=user_detail_view, name="detail"),
    path("Booking/", view=views.DisplayBooking.as_view(), name='Bookings'),
    path("Booking/delete/<int:pk>/", view=views.DeleteBooking.as_view(), name='DeleteBookings'),
    path("Booking/update/<int:pk>/", view=views.UpdateBooking.as_view(), name='UpdateBookings'),
    
]
