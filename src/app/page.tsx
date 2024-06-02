import HeroLogo from "@/components/hero/logo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroLogo />

      <p className="text-blue-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
        delectus, quo beatae veniam, voluptatum assumenda sunt a reprehenderit
        nam odit corrupti cupiditate harum. Beatae, itaque cumque possimus
        placeat provident veritatis!
      </p>
    </main>
  );
}
