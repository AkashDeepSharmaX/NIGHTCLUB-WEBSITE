from rest_framework import viewsets, generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from .models import Event, MenuItem, GalleryImage, Booking
from .serializers import EventSerializer, MenuItemSerializer, GalleryImageSerializer, BookingSerializer
from rest_framework.pagination import PageNumberPagination

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [AllowAny]
    pagination_class = PageNumberPagination

class MenuItemViewSet(viewsets.ModelViewSet):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer
    permission_classes = [AllowAny]
    pagination_class = PageNumberPagination

class GalleryImageViewSet(viewsets.ModelViewSet):
    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer
    permission_classes = [AllowAny]
    pagination_class = PageNumberPagination

class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [AllowAny]
    pagination_class = PageNumberPagination

class HomeView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        total_bookings = Booking.objects.count()
        return Response({
            "message": "Welcome to the Nightclub API!",
            "total_bookings": total_bookings
        })

class MusicView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)

class EventsView(MusicView):
    pass

class BarView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        items = MenuItem.objects.all()
        serializer = MenuItemSerializer(items, many=True)
        return Response(serializer.data)

class NightCrewView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        crew = [
            {"name": "DJ Max", "role": "Resident DJ"},
            {"name": "Anna Lee", "role": "Bartender"},
            {"name": "Sam Smith", "role": "Manager"},
        ]
        return Response(crew)

class GalleryView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        images = GalleryImage.objects.all()
        serializer = GalleryImageSerializer(images, many=True)
        return Response(serializer.data)

class SocialView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        links = {
            "instagram": "https://instagram.com/nightclub",
            "facebook": "https://facebook.com/nightclub",
            "twitter": "https://twitter.com/nightclub"
        }
        return Response(links)

class ContactView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        contact = {
            "phone": "+1234567890",
            "email": "info@nightclub.com",
            "address": "123 Main St, City"
        }
        return Response(contact)

class DirectionsView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        directions = {
            "map_url": "https://maps.google.com/?q=nightclub",
            "instructions": "Located downtown, next to the central park."
        }
        return Response(directions)
