from django.db import models
from django.utils import timezone
from typing import Optional

class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateTimeField()
    venue = models.CharField(max_length=200)
    image_url = models.URLField(blank=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title

class MenuItem(models.Model):
    CATEGORY_CHOICES = [
        ('cocktail', 'Cocktail'),
        ('beer', 'Beer'),
        ('wine', 'Wine'),
        ('spirit', 'Spirit'),
        ('soft', 'Soft Drink'),
        ('other', 'Other'),
    ]
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    description = models.TextField(blank=True)
    image_url = models.URLField(blank=True)

    def __str__(self):
        return self.name

class GalleryImage(models.Model):
    title = models.CharField(max_length=100)
    image_url = models.URLField()
    upload_date = models.DateField(default=timezone.now)

    def __str__(self):
        return self.title

class Booking(models.Model):
    OCCASION_CHOICES = [
        ('birthday', 'Birthday'),
        ('anniversary', 'Anniversary'),
        ('party', 'Party'),
        ('other', 'Other'),
    ]
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('cancelled', 'Cancelled'),
    ]
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    phone = models.CharField(max_length=15)
    reservation_date = models.DateTimeField()
    occasion = models.CharField(max_length=20, choices=OCCASION_CHOICES)
    party_size = models.PositiveIntegerField()
    special_requests = models.TextField(blank=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.reservation_date})"
