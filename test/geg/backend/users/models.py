from django.contrib.auth.models import AbstractUser
from django.db.models import *
from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _

class User(AbstractUser):
    """
    Default custom user model for GEG.
    If adding fields that need to be filled at user signup,
    check forms.SignupForm and forms.SocialSignupForms accordingly.
    """

    # First and last name do not cover name patterns around the globe
    name = CharField(_("Name of User"), blank=True, max_length=255)
    first_name = None  # type: ignore[assignment]
    last_name = None  # type: ignore[assignment]

    def get_absolute_url(self) -> str:
        """Get URL for user's detail view.

        Returns:
            str: URL for user detail.

        """
        return reverse("users:detail", kwargs={"username": self.username})
    
    
class Booking(models.Model):
    Id = AutoField(primary_key=True)
    Email = EmailField(default="timothy@gmail.com", max_length=30)
    FirstName = TextField(default="Fren")
    LastName = TextField(default="Marlon")
    Phone = models.IntegerField(default="09324142132")
    Company = CharField(default="GEG Company", max_length=20)
    Day = TextField(default="04/14", max_length=20)
    Time = TextField(default="10:00AM - 11:00AM")
    Mode = TextField(default="Online", max_length=20)
    Plan = ImageField(default="plan.jpg", upload_to="plan/")
    def __str__(self):
        return self.bookingEmail
class Service (models.Model):
    Id = AutoField(primary_key=True)
    Title = CharField(max_length=50, default= "Service 1")
    Description = TextField(default= "This is a Service")
    Image = ImageField(upload_to="service/", default="frontend/src/assets/se-dummy-images/dummy-pic-4-abt-us.jpeg")

class Project (models.Model):
    Id = AutoField(primary_key=True)
    Title = CharField(max_length=50)
    Description = TextField()
    MainImage = ImageField(default= 'frontend/src/assets/se-dummy-images/dummy-pic-4-abt-us.jpeg',upload_to="project/{0}_MainImage".format(Title))
    SubImage = ImageField(default='frontend/src/assets/se-dummy-images/dummy-pic-4-abt-us.jpeg',upload_to="project/{0}/subimages".format(Title))