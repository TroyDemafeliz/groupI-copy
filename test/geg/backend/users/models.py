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
    Email = EmailField()
    Name = CharField(max_length=50)
    Phone = models.IntegerField()
    Company = CharField()
    Date = TextField()
    Mode = TextField()
    plan = ImageField()
    
    def __str__(self):
        return self.bookingEmail

