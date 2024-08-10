import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import clothes from "../assets/clothes.jpg";
import kid from "../assets/kid.jpg";
import { Card } from "@/components/ui/card";

function About() {
  return (
    <>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col items-center justify-center gap-8 px-4 text-center md:gap-10 md:px-6">
            <div className="space-y-3 flex flex-col items-center gap-5">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                About Us
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We&apos;re on a mission to revolutionize the industry. Our
                commitment to excellence is unparalleled.
              </p>
              <Carousel className="w-[1000px]">
                <CarouselContent className="w-[1000px]">
                  <CarouselItem className="w-full">
                    <img src={clothes} />
                  </CarouselItem>
                  <CarouselItem>
                    <img className="w-[1000px]" src={kid} />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col items-center justify-center gap-8 px-4 text-center md:gap-10 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Mission
              </h2>
              <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                To provide innovative solutions that empower our customers to
                achieve their goals.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col items-center justify-center gap-8 px-4 text-center md:gap-10 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Values
              </h2>
              <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Integrity, Innovation, Collaboration, Customer Focus, Quality.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Meet the Team
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our dedicated team is passionate about delivering excellence.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 items-stretch justify-center md:grid-cols-2 lg:gap-4 xl:gap-8">
              <div className="flex flex-col gap-1.5">
                <img
                  src="/placeholder.svg"
                  width="180"
                  height="180"
                  alt="Avatar"
                  className="mx-auto rounded-full overflow-hidden object-cover object-center"
                  style={{ aspectRatio: "180/180", objectFit: "cover" }}
                />
                <div className="mx-auto space-y-0.5">
                  <h3 className="text-lg font-bold">Alice Johnson</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    CEO
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <img
                  src="/placeholder.svg"
                  width="180"
                  height="180"
                  alt="Avatar"
                  className="mx-auto rounded-full overflow-hidden object-cover object-center"
                  style={{ aspectRatio: "180/180", objectFit: "cover" }}
                />
                <div className="mx-auto space-y-0.5">
                  <h3 className="text-lg font-bold">Mark Lee</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    CTO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Testimonials
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our customers love us. Here&apos;s what they&apos;re saying
                about our company.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 items-stretch justify-center md:grid-cols-2 md:gap-4">
              <div className="flex flex-col gap-2 p-4 border rounded-lg border-gray-200 bg-gray-50 shadow-sm max-w-sm justify-center md:p-8 md:gap-4 md:max-w-none md:col-start-2 dark:border-gray-800 dark:bg-gray-950">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  &ldquo;The platform is incredibly user-friendly. We were able
                  to onboard our team with minimal training, and the
                  collaboration features have really improved our productivity.
                  I highly recommend it!&rdquo;
                </p>
                <div className="flex items-center space-x-2">
                  <div className="font-bold">Samantha Willis</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    (Marketing Manager)
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-4 border rounded-lg border-gray-200 bg-gray-50 shadow-sm max-w-sm justify-center md:p-8 md:gap-4 md:max-w-none dark:border-gray-800 dark:bg-gray-950">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  &ldquo;The support team is fantastic. Whenever we&apos;ve had
                  an issue or a question, they&apos;ve been incredibly
                  responsive. It&apos;s clear that they care about their
                  customers. That&apos;s made a huge difference for us.&rdquo;
                </p>
                <div className="flex items-center space-x-2">
                  <div className="font-bold">Alex Chen</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    (CTO)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-12 md:py-24 bg-gray-900">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <img
              src="/placeholder.svg"
              width="140"
              height="70"
              alt="Logo"
              className="mx-auto"
              style={{ aspectRatio: "140/70", objectFit: "cover" }}
            />
            <div className="space-y-2 text-gray-50 md:text-base lg:text-sm xl:text-base dark:text-gray-950">
              <p>123 Street Avenue, City</p>
              <p>support@example.com</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default About;
