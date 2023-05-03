
class User():
    id = AutoField(primary_key=True)
    email = EmailField(max_length=255)
    firstName = charfield(max_length=255)
    lastName = charfield(max_length=255)
    dob = DateField(null=True, blank=True)
    
    pronouns = [
        ('Male', 'He/Him'),
        ('Female', 'Her/She'),
        ('Non-Binary', 'They/Them'),
        ('Other', 'Other'),
    ]

    password = CharField(max_length=255)
    confirmPassword = CharField(max_length=255)

    following = []
    followers = []

    avatar = FileField(null=True, blank=True)
    bio = CharField(max_length=255, null=True, blank=True)
    location = CharField(max_length=255, null=True, blank=True)
    domain = CharField(max_length=255, null=True, blank=True)

    is_active = BooleanField(default=True)
    is_newuser = BooleanField(default=False)
    is_verified = BooleanField(default=False)
    is_premium = BooleanField(default=False)
    is_pro = BooleanField(default=False)

    mainIP = genericIPAddressField(null=True, blank=True)
    is_staff = BooleanField(default=False)
    is_superuser = BooleanField(default=False)

    date_joined = DateTimeField(auto_now_add=True)
    last_login = DateTimeField(auto_now=True)

    def __str__(self):
        return self.email
    
    def get_full_name(self):
        return self.firstName +'' + self.lastName
    
    def get_short_name(self):
        return self.firstName
    
    def __name__(self):
        return self.email
    
    def __unicode__(self):
        return self.email


class Cameras(models.Model):
    id = AutoField(primary_key=True)
    brandName = CharField(max_length=255)
    modelName = CharField(max_length=255)
    yearReleased = IntegerField(null=True, blank=True)

    def __str__(self):
        return self.brandName + ' ' + self.modelName
    
    def __unicode__(self):
        return self.brandName +'' + self.modelName
    
class Gallery(models.Model):
    id = AutoField(primary_key=True)
    title = CharField(max_length=255)
    description = CharField(max_length=255)
    url = CharField(max_length=255)
    slug = SlugField(max_length=255, null=True, blank=True)
    bucket = URLField()
    thumbnail = ImageField()

    def __str__(self):
        return self.title
    
class Posts(models.Model):
    id = AutoField(primary_key=True)
    image = ImageField()
    description = CharField(max_length=255)
    date = DateTimeField(auto_now_add=True)
    author = ForeignKey(User, on_delete=models.CASCADE)
    gallery = ForeignKey(Gallery, on_delete=models.CASCADE)
    metadata = JSONField()
    is_forSale = BooleanField(default=False)
    tags = JSONField(null=True, blank=True)


    def __str__(self):
        return self.description

class MetaData(models.Model):
    camera = ForeignKey(Cameras, on_delete=models.CASCADE)
    post = ForeignKey(Posts, on_delete=models.CASCADE)
    lens = CharField(max_length=255, null=True, blank=True)
    date = DateTimeField(auto_now_add=True)
    fstop = CharField(max_length=255, null=True, blank=True)
    focalLength = CharField(max_length=255, null=True, blank=True)
    aperture = CharField(max_length=255, null=True, blank=True)
    iso = CharField(max_length=255, null=True, blank=True)
    exposureTime = CharField(max_length=255, null=True, blank=True)
    shutterSpeed = CharField(max_length=255, null=True, blank=True)
    file = FileField(null=True, blank=True)
    fileSize = CharField(max_length=255, null=True, blank=True)
    fileType = CharField(max_length=255, null=True, blank=True)



    def __str__(self):
        return self.camera.brandName +'' + self.camera.modelName + '' + self.post.description +'' + self.date.strftime('%Y-%m-%d')
    
    def __unicode__(self):
        return self.camera.brandName +'' + self.camera.modelName +'' + self.post.description +'' + self.date.strftime('%Y-%m-%d')


    