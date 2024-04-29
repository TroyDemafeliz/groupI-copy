from django.urls import path

from django.conf.urls.static import static
from django.conf import settings
from django.urls import include, re_path




from .views import user_detail_view
from .views import user_redirect_view
from .views import user_update_view
from .views import MeetingApi

app_name = "users"
urlpatterns = [
    path("~redirect/", view=user_redirect_view, name="redirect"),
    path("~update/", view=user_update_view, name="update"),
    path("<str:username>/", view=user_detail_view, name="detail"),
    path("~Meeting", view=MeetingApi, name='meeting'),
]
