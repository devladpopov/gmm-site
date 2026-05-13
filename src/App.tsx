import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Products } from "@/components/sections/Products"
import { Research } from "@/components/sections/Research"
import { Team } from "@/components/sections/Team"
import { Contact } from "@/components/sections/Contact"
import { FadeIn } from "@/components/shared/FadeIn"

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
        <Products />
      </FadeIn>
      <FadeIn>
        <Research />
      </FadeIn>
      <FadeIn>
        <Team />
      </FadeIn>
      <FadeIn>
        <Contact />
      </FadeIn>
      <Footer />
    </div>
  )
}

export default App
