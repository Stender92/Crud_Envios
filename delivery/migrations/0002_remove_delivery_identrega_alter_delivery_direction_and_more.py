# Generated by Django 4.1.7 on 2023-05-24 20:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('delivery', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='delivery',
            name='identrega',
        ),
        migrations.AlterField(
            model_name='delivery',
            name='direction',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='delivery',
            name='item',
            field=models.CharField(max_length=200),
        ),
    ]
