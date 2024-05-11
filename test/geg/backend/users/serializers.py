from rest_framework import serializers
from backend.users.models import Booking, Service, Project
from .models import User

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model=Booking
        fields=('Id','Email', 'Name', 'Phone','Company', 'Date','Mode', 'Plan')
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id",  "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user
    
class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ["Id",  "Title", "Description", "Image"]
        
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ["Id",  "Title", "Description", "MainImage", "SubImage"]