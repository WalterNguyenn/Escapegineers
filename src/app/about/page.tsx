import Image from 'next/image'
import type { ReactNode } from 'react'
import RoomDocumentation from '@/components/RoomDocumentation'

const contentMax = 'mx-auto max-w-6xl'

function AboutSection({
  children,
  className = '',
  withDivider = true,
}: {
  children: ReactNode
  className?: string
  withDivider?: boolean
}) {
  return (
    <section
      className={`bg-light-bg dark:bg-dark-bg py-14 md:py-16 lg:py-20 ${
        withDivider ? 'border-t border-light-border/40 dark:border-dark-border/40' : ''
      } ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6">{children}</div>
    </section>
  )
}

function PhotoTile({
  src,
  alt,
  className = '',
  aspectClass = 'aspect-[4/3]',
  sizes,
  priority = false,
}: {
  src: string
  alt: string
  className?: string
  aspectClass?: string
  sizes: string
  priority?: boolean
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-light-border dark:border-dark-border shadow-md ${aspectClass} ${className}`}
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} priority={priority} />
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors">
      {/* Hero */}
      <AboutSection withDivider={false} className="pb-12 pt-10 md:pb-16 md:pt-14">
        <div className={`${contentMax} text-center`}>
          <h1 className="font-heading text-4xl font-bold uppercase tracking-wide text-light-gold dark:text-dark-gold md:text-5xl">
            About Escapegineers
          </h1>
        </div>
      </AboutSection>

      {/* Mission */}
      <AboutSection className="pt-6 md:pt-10">
        <div className={`${contentMax} grid gap-10 md:gap-12 lg:grid-cols-2 lg:items-start lg:gap-14`}>
          <div className="max-w-prose lg:max-w-none">
            <h2 className="mb-5 font-heading text-3xl font-bold text-light-gold dark:text-dark-gold md:mb-6 md:text-4xl">
              Our Mission
            </h2>
            <div className="space-y-5 font-body leading-relaxed text-light-muted dark:text-dark-muted md:space-y-6">
              <p>
                Escapegineers is a student-led team of Purdue engineers who love building things,
                solving problems, and finding creative ways to make engineering fun for everyone. We
                design and build escape rooms packed with puzzles based on real engineering
                concepts, from mechanical devices to logic circuits and problem-solving
                challenges.
              </p>
              <p>
                Why do we do it? Because we believe engineering should be exciting, hands-on, and
                accessible. Our goal is to spark curiosity, get people thinking like engineers,
                and show how problem-solving skills can turn into something awesome.
              </p>
              <p>
                Whether you&apos;re a future engineer, a puzzle fan, or just looking for a good
                time with friends, our rooms are made for you. At the end of the day we build these
                rooms because it&apos;s fun, and because we want to share what makes engineering
                great.
              </p>
            </div>
            <div className="mt-8 w-full md:mt-10">
              <video
                aria-label="Escape room walkthrough"
                className="w-full rounded-lg border border-light-border dark:border-dark-border shadow-md"
                controls
                playsInline
                preload="metadata"
              >
                <source src="/videos/Walkthrough1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="grid gap-4 md:gap-5">
            <PhotoTile
              src="/images/Projectworking1.jpg"
              alt=""
              sizes="(min-width: 1024px) 45vw, 100vw"
              priority
              aspectClass="aspect-[16/10] lg:aspect-[5/4]"
            />
            <PhotoTile
              src="/images/DrewWorking1.png"
              alt=""
              sizes="(min-width: 1024px) 45vw, 100vw"
              aspectClass="aspect-[16/10] lg:aspect-[4/3]"
            />
          </div>
        </div>
      </AboutSection>

      {/* Project background + photos */}
      <AboutSection>
        <div className={`${contentMax} space-y-12 md:space-y-14`}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            <PhotoTile
              src="/images/DanielSoldering.jpg"
              alt=""
              sizes="(min-width: 768px) 45vw, 100vw"
              aspectClass="aspect-[16/10]"
            />
            <PhotoTile
              src="/images/Breadboarding1.jpg"
              alt=""
              sizes="(min-width: 768px) 45vw, 100vw"
              aspectClass="aspect-[16/10]"
            />
          </div>

          <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:items-start lg:gap-14">
            <div className="max-w-prose lg:max-w-none">
              <h2 className="mb-5 font-heading text-3xl font-bold text-light-gold dark:text-dark-gold md:mb-6 md:text-4xl">
                Project Background
              </h2>
              <div className="space-y-5 font-body leading-relaxed text-light-muted dark:text-dark-muted md:space-y-6">
                <p>
                  The escape room project began under EPICS; Engineering Projects in Community
                  Service is a Purdue program where student teams partner with community partners to
                  create, build, and deploy tangible solutions to real-world problems. Our team of
                  mechanical engineering students had originally partnered with the Children&apos;s
                  Museum of Indianapolis to design an educational puzzle experience for children ages
                  8 to 15. The idea was to combine interactive problem solving with engineering
                  basics even as young participants were learning in an escape room-type environment.
                </p>
                <p>
                  But the second week into the project, we did not get any response from the
                  Children&apos;s Museum. This was the case last semester, which extremely limited our
                  productivity, having had very few interactions. Therefore, we would have none of it
                  in the second semester: we basically took control of the entire project and project
                  direction.
                </p>
                <p>
                  With the approval of our professor and the availability of his office in the ET
                  building for use, we somehow still maintained part of the original educational
                  identity. Though the escape room was still drawing inspiration from Purdue
                  engineering and highlighting different engineering disciplines, the shift was made
                  to an older audience: teenagers to college students. This change granted us a lot
                  more creative leeway, which we took advantage of, heavily relying on Purdue-specific
                  humor and references. The escape room then had a new identity: &quot;Escaping
                  President Mung Chiang&apos;s Office&quot; is a tongue-in-cheek yet immersive
                  application set in a Purdue-themed ambiance.
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:gap-5 lg:pt-2">
              <PhotoTile
                src="/images/LaoluCoding.jpg"
                alt=""
                sizes="(min-width: 1024px) 42vw, 100vw"
                aspectClass="aspect-[16/10] lg:aspect-[4/3]"
              />
              <PhotoTile
                src="/images/TableWorking.jpg"
                alt=""
                sizes="(min-width: 1024px) 42vw, 100vw"
                aspectClass="aspect-[16/10] lg:aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </AboutSection>

      <AboutSection>
        <div className={contentMax}>
          <RoomDocumentation />
        </div>
      </AboutSection>

      <AboutSection className="pt-8 md:pt-10">
        <div className="mx-auto w-full max-w-3xl space-y-6 text-center font-body leading-relaxed text-light-muted dark:text-dark-muted md:space-y-7">
          <h2 className="font-heading text-3xl font-bold text-light-gold dark:text-dark-gold md:text-4xl">
            Proudly Part of the Purdue Escapegineers Club
          </h2>
          <p>
            The Purdue Escapegineers Club brings together students who share a passion for hands-on
            engineering, creative problem-solving, and building unique experiences for the community.
            Through our custom-designed escape rooms, we combine technical skills with teamwork and
            imagination to create challenges that are fun, memorable, and rooted in real engineering
            concepts.
          </p>
          <p>
            Our goal is to inspire curiosity about engineering, encourage collaborative thinking, and
            offer experiences that connect people with the problem-solving side of STEM in a way
            that&apos;s accessible to everyone.
          </p>
        </div>
      </AboutSection>
    </div>
  )
}
