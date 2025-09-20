from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    EventViewSet, MenuItemViewSet, GalleryImageViewSet, BookingViewSet,
    HomeView, MusicView, EventsView, BarView, NightCrewView, GalleryView,
    SocialView, ContactView, DirectionsView
)

router = DefaultRouter()
router.register(r'events', EventViewSet)
router.register(r'menu-items', MenuItemViewSet)
router.register(r'gallery-images', GalleryImageViewSet)
router.register(r'bookings', BookingViewSet)

urlpatterns = [
    path('home/', HomeView.as_view(), name='home'),
    path('music/', MusicView.as_view(), name='music'),
    path('events/', EventsView.as_view(), name='events'),
    path('bar/', BarView.as_view(), name='bar'),
    path('night-crew/', NightCrewView.as_view(), name='night-crew'),
    path('gallery/', GalleryView.as_view(), name='gallery'),
    path('social/', SocialView.as_view(), name='social'),
    path('contact/', ContactView.as_view(), name='contact'),
    path('directions/', DirectionsView.as_view(), name='directions'),
    path('', include(router.urls)),
]
