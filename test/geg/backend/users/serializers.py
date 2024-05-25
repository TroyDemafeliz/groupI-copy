from rest_framework import serializers
from backend.users.models import Booking, Service, Project
from .models import User
from djoser.serializers import UserCreateSerializer as BaseUserRegistrationSerializer

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model=Booking
        fields=('Id','Email', 'FirstName', 'LastName', 'Phone','Company', 'Date','Mode', 'Plan')
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "password", "name"]
        extra_kwargs = {"password": {"write_only": True}}
        extra_kwargs = {"name": {"default": "username"} }
        lookup_field = 'username'
        
    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user
    
class UpdateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "name"]
        lookup_field = 'username'

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ["Id",  "Title", "Description", "Image"]
        
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ["Id",  "Title", "Description", "MainImage", "SubImage"]
        
class UserRegistrationSerializer(BaseUserRegistrationSerializer):
    class Meta(BaseUserRegistrationSerializer.Meta):
        fields = ('username', 'name', 'password' )