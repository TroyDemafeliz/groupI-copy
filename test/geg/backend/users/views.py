from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.views import PasswordChangeView
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.messages.views import SuccessMessageMixin
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from django.views.generic import DetailView
from django.views.generic import RedirectView
from django.views.generic import UpdateView
from .models import User,Booking, Project, Service
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import generics
from .serializers import UserSerializer, BookingSerializer, ProjectSerializer, ServiceSerializer, UpdateUserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.exceptions import TokenError
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework import status
from rest_framework.response import Response

#These are for the backend server
class UserDetailView(LoginRequiredMixin, DetailView):
    model = User
    slug_field = "username"
    slug_url_kwarg = "username"

user_detail_view = UserDetailView.as_view()

class UserUpdateView(LoginRequiredMixin, SuccessMessageMixin, UpdateView):
    model = User
    fields = ["name"]
    success_message = _("Information successfully updated")

    def get_success_url(self):
        # for mypy to know that the user is authenticated
        assert self.request.user.is_authenticated
        return self.request.user.get_absolute_url()

    def get_object(self):
        return self.request.user

user_update_view = UserUpdateView.as_view()

class UpdatePassword(PasswordChangeView):
    form_class = PasswordChangeForm
    permission_classes=[AllowAny]
    def get_success_url(self):
        # for mypy to know that the user is authenticated
        assert self.request.user.is_authenticated
        return self.request.user.get_absolute_url()
#for User Creation
class UserRedirectView(LoginRequiredMixin, RedirectView):
    permanent = False

    def get_redirect_url(self):
        return reverse("users:detail", kwargs={"username": self.request.user.username})


user_redirect_view = UserRedirectView.as_view()

class DisplayAllUserView(generics.ListAPIView):
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    queryset = User.objects.all()
class DisplayUserView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    queryset = User.objects.all()
    lookup_field = 'username'
                
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class UpdateUserView(generics.UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UpdateUserSerializer
    permission_classes = [AllowAny]
    lookup_field = 'username'
    
class DeleteUserView(generics.DestroyAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    lookup_field = 'username'

#Create Booking
class DisplayBooking(generics.ListAPIView):
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]
    queryset = Booking.objects.all()
class CreateBooking(generics.CreateAPIView):
    serializer_class = BookingSerializer
    permission_classes = [AllowAny]
    queryset = Booking.objects.all()
class RetrieveUpdateBooking(generics.RetrieveUpdateAPIView):
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]
    queryset = Booking.objects.all()
class DeleteBooking(generics.DestroyAPIView):
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]
    queryset = Booking.objects.all()
class DisplayProject(generics.ListAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [AllowAny]
    queryset = Project.objects.all()
class CreateProject(generics.CreateAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]
    queryset = Project.objects.all()   
class RetrieveUpdateProject(generics.RetrieveUpdateAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]
    queryset = Project.objects.all()
class DeleteProject(generics.DestroyAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]
    queryset = Project.objects.all()
    
class DisplayService(generics.ListAPIView):
    serializer_class = ServiceSerializer
    permission_classes = [AllowAny]
    queryset = Service.objects.all()
class CreateService(generics.CreateAPIView):
    serializer_class = ServiceSerializer
    permission_classes = [IsAuthenticated]
    queryset = Service.objects.all()
class RetrieveUpdateService(generics.RetrieveUpdateAPIView):
    serializer_class = ServiceSerializer
    permission_classes = [AllowAny]
    queryset = Service.objects.all()
class DeleteService(generics.DestroyAPIView):
    serializer_class = ServiceSerializer
    permission_classes = [IsAuthenticated]
    queryset = Service.objects.all()
    
# filter functions will be below
    