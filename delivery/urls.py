from django.urls import include, path
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from delivery import views

#api version
router = routers.DefaultRouter()
router.register(r'delivery',views.DelivView,'delivery')


urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title='Delivery API'))
]