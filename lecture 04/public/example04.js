class Multimedia 
{ 
    constructor(name, extension)
    {
        this.name = name
        this.extension = extension
    }

    getMultimediaType (){
        console.log(`The type of this file is ${this.extension}`)
    }   
}

class Picture extends Multimedia
{
    constructor (name, extension)
    {
        super(name, extension)
    }

    getMultimediaType (){
        console.log(`Overriding a function: the type of this file is ${this.extension}`)
    }  

    show ()
    {
        console.log(`Showing the picture....`)
    }
}

class Video extends Multimedia
{
    constructor (name, extension)
    {
        super(name, extension)
    }

    play()
    {
        console.log(`The video is playing...`)
    }
}

let picture1 = new Picture("pic1", ".svg")
picture1.getMultimediaType()


let video1 = new Video("vid1", ".mp4")
video1.getMultimediaType()
video1.play()
video1.show()


console.dir(window)
/*
for (let e in array)
{
    process.stdout.write(array[e]+ " ")
}
process.stdout.write("\n")


console.dir(window.navigator);

console.log(window.screenX + ", " + window.screenY);
console.log(window.innerWidth + ", " + window.innerHeight);

console.dir(window.history);

window.history.back(); // haha
*/