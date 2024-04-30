from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.messages.views import SuccessMessageMixin
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from django.views.generic import DetailView
from django.views.generic import RedirectView
from django.views.generic import UpdateView
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core.files.storage import default_storage
from backend.users.models import User, Meeting


from backend.users.serializers import MeetingSerializer

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


class UserRedirectView(LoginRequiredMixin, RedirectView):
    permanent = False

    def get_redirect_url(self):
        return reverse("users:detail", kwargs={"username": self.request.user.username})


user_redirect_view = UserRedirectView.as_view()

@csrf_exempt
def MeetingApi(request,id=0):
    if request.method=='GET':
        meeting = Meeting.objects.all()
        meeting_serializer=MeetingSerializer(meeting,many=True)
        return JsonResponse(meeting_serializer.data,safe=False)
    elif request.method=='POST':
        meeting_data=JSONParser().parse(request)
        meeting_serializer=MeetingSerializer(data=meeting_data)
        if meeting_serializer.is_valid():
            meeting_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        meeting_data=JSONParser().parse(request)
        meeting=Meeting.objects.get(meetingId=meeting_data['meetingId'])
        meeting_serializer=MeetingSerializer(meeting,data=meeting_data)
        if meeting_serializer.is_valid():
            meeting_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        meeting=Meeting.objects.get(meetingId=id)
        meeting.delete()
        return JsonResponse("Deleted Successfully",safe=False)