
import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import image1 from "@/assets/images/IMG_5049.jpg"
import image2 from "@/assets/images/IMG_0061.jpg"
import image3 from "@/assets/images/IMG_0062.jpg"
import image4 from "@/assets/images/IMG_0063.jpg"
import image5 from "@/assets/images/IMG_0064.jpg"
import image6 from "@/assets/images/IMG_0067.jpg"
import image7 from "@/assets/images/IMG_5046.jpg"
import image8 from "@/assets/images/IMG_5048.jpg"
// import image9 from "@/assets/images/IMG_0057.jpg"

export function CarouselDemo() {
  const nextRef = useRef<HTMLButtonElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    image1, image2, image3, image4, image5, image6, image7, image8,
    image1, image2, image3, image4, image5, image6, image7, image8,
    image1, image2, image3, image4, image5, image6, image7, image8,
    image1, image2, image3, image4, image5, image6, image7, image8,
    image1, image2, image3, image4, image5, image6, image7, image8
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    nextRef.current?.click()
  }, [currentIndex])

  return (
    <div className="flex justify-center my-10 px-4 w-full overflow-hidden">
      <Carousel className="w-full max-w-md md:max-w-3xl">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="shadow-none ring-0">
                  <CardContent className="p-0 h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden">
                    <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="bg-gray-400 hover:bg-gray-500 border-none" />
        <CarouselNext
          ref={nextRef}
          className="bg-gray-400 hover:bg-gray-500 border-none"
        />
      </Carousel>
    </div>
  )
}