# Generated by Django 4.2.11 on 2024-05-05 15:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_remove_booking_plan'),
    ]

    operations = [
        migrations.AddField(
            model_name='booking',
            name='Plan',
            field=models.ImageField(default='plan.jpg', upload_to='plan/'),
        ),
    ]
