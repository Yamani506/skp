
import { GalleryVerticalEnd } from "lucide-react"
import { LoginForm } from "@/components/ui/loginForm"

export default function LoginPage() {
  return (
    <div className="grid min-h-screen ">
      <div className="flex flex-col gap-4 p-6 md:p-10  ">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
           SkipsAI
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm  />
          </div>
        </div>
      </div>
     
    </div>
  )
}

