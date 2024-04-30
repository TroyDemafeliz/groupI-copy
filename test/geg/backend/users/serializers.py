from rest_framework import serializers
from backend.users.models import Meeting

class MeetingSerializer(serializers.ModelSerializer):
    class Meta:
        model=Meeting
        fields=('meetingId','meetingEmail', 'meetingName', 'meetingPhone', 'meetingDate','meetingMode')