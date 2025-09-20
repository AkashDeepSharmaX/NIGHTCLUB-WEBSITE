from django.core.management.base import BaseCommand
from nightclub_api.models import Event, MenuItem, GalleryImage, Booking
from django.utils import timezone

class Command(BaseCommand):
    help = 'Seed initial data for the nightclub API'

    def handle(self, *args, **options):
        # Events
        Event.objects.all().delete()
        events = [
            Event(title='Bass Music Festival', description='A night of bass music.', date=timezone.now(), venue='Main Hall', image_url='', is_active=True),
            Event(title='Sunset Chill', description='Chill music at sunset.', date=timezone.now(), venue='Terrace', image_url='', is_active=True),
            Event(title='VIP Gala', description='Exclusive VIP event.', date=timezone.now(), venue='VIP Lounge', image_url='', is_active=True),
            Event(title='Neon Party', description='Neon lights and party.', date=timezone.now(), venue='Club Floor', image_url='', is_active=True),
            Event(title='Casino Night', description='Casino themed party.', date=timezone.now(), venue='Casino Room', image_url='', is_active=True),
        ]
        Event.objects.bulk_create(events)

        # Menu Items
        MenuItem.objects.all().delete()
        menu_items = [
            MenuItem(name='Blue Martini', category='cocktail', price=12.00, description='Blue cocktail.', image_url=''),
            MenuItem(name='Premium Vodka', category='spirit', price=15.00, description='Top shelf vodka.', image_url=''),
            MenuItem(name='Craft Beer', category='beer', price=8.00, description='Local craft beer.', image_url=''),
            MenuItem(name='Red Wine', category='wine', price=10.00, description='Elegant red wine.', image_url=''),
            MenuItem(name='Gin & Tonic', category='cocktail', price=11.00, description='Classic gin and tonic.', image_url=''),
            MenuItem(name='Rum Punch', category='cocktail', price=13.00, description='Tropical rum punch.', image_url=''),
            MenuItem(name='Tequila Shot', category='spirit', price=9.00, description='Tequila with lime.', image_url=''),
            MenuItem(name='Whiskey Sour', category='cocktail', price=12.00, description='Whiskey based cocktail.', image_url=''),
            MenuItem(name='Soft Drink', category='soft', price=5.00, description='Non-alcoholic beverage.', image_url=''),
            MenuItem(name='Champagne', category='wine', price=20.00, description='Celebration champagne.', image_url=''),
        ]
        MenuItem.objects.bulk_create(menu_items)

        # Gallery Images
        GalleryImage.objects.all().delete()
        gallery_images = [
            GalleryImage(title='Main Hall', image_url='', upload_date=timezone.now()),
            GalleryImage(title='Terrace Sunset', image_url='', upload_date=timezone.now()),
            GalleryImage(title='VIP Lounge', image_url='', upload_date=timezone.now()),
            GalleryImage(title='Neon Lights', image_url='', upload_date=timezone.now()),
            GalleryImage(title='Casino Room', image_url='', upload_date=timezone.now()),
        ]
        GalleryImage.objects.bulk_create(gallery_images)

        # Sample Bookings
        Booking.objects.all().delete()
        bookings = [
            Booking(first_name='John', last_name='Doe', phone='1234567890', reservation_date=timezone.now(), occasion='birthday', party_size=5, special_requests='', status='confirmed'),
            Booking(first_name='Jane', last_name='Smith', phone='0987654321', reservation_date=timezone.now(), occasion='party', party_size=10, special_requests='VIP table', status='pending'),
        ]
        Booking.objects.bulk_create(bookings)

        self.stdout.write(self.style.SUCCESS('Seed data loaded successfully.'))
