from django.contrib import admin
from .models import Event, MenuItem, GalleryImage, Booking

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'venue', 'is_active')
    search_fields = ('title', 'venue')

@admin.register(MenuItem)
class MenuItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price')
    search_fields = ('name', 'category')

@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ('title', 'upload_date')
    search_fields = ('title',)

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'reservation_date', 'party_size', 'status')
    search_fields = ('first_name', 'last_name', 'phone')
