import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function CertificationsCard({ certificationsData }) {
  return (
    <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">
      {certificationsData.map((cert, index) => (
        <Card
          key={index}
          className="overflow-hidden border-2 border-black/10 hover:border-second transition-all duration-300 group shadow-sm hover:shadow-md"
        >
          <CardHeader className="p-0">
            <div className="relative aspect-video overflow-hidden bg-muted">
              <Image
                width={900}
                height={100}
                src={cert.image}
                alt={cert.title}
                priority={index < 2}   
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2 bg-second text-white text-[10px] px-2 py-1 rounded-full font-bold uppercase">
                {cert.category}
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-4">
            <CardTitle className="text-lg font-black leading-tight group-hover:text-second transition-colors">
              {cert.title}
            </CardTitle>
            <p className="text-xs text-muted-foreground mt-1 font-medium">
              Official Certification • Tuwaiq Academy
            </p>
          </CardContent>

          <CardFooter className="p-4 pt-0 flex justify-between items-center">
            <span className="text-[10px] font-bold text-gray-400">
              Verified Badge
            </span>
            <div className="h-1 w-12 bg-second/20 rounded-full group-hover:w-20 transition-all duration-300"></div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
