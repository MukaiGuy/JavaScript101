

// referance
const user = {
    id: UUID,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    brandName: 'John Doe Photogrophy',
    domain: 'someURL.com',
    isActive: true,
    isPremium: false,
    isPro: false,
}

const post = {
    id: UUID,
    fileURL: 'url',
    fileSize: '500Mb',
    fileType: 'TIFF',
    description: charField,
    // Meta Data
    camera: 'Nikon',
    Lens: 'Nikkor 24mm-70mm',
    focalLength: '55mm',
    fstop: 'f1.4',
    iso: '100',
    geoLocation:[
        {
            lat: '34.324534',
            long: '84.40923'
        },
        {
            isHidden: true
        }
    ],
    tags: 'List',
    gallary: 'Fkey',
    forSale: true
}

const gallary = {
    id: UUID,
    url: 'url',
    name: charField,
    tags: 'Nature',
    isPrivate: true,
    isCommissioned: false,
    photos: FileList,
    count: 95,
    size: '20Gb',
}

const camera = {
    id: UUID,
    brand: 'Nikon',
    model: 'D850',
    yearReleased: '2017'
}

