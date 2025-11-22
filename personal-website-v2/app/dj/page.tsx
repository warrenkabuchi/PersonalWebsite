import { BookingForm } from "@/components/booking-form";
import { Music } from "lucide-react";

export default function DJPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-white pt-16">
            {/* Hero Section */}
            <section className="relative flex h-[60vh] items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-slate-950 z-0" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 text-center p-4">
                    <div className="mb-6 inline-flex items-center justify-center rounded-full bg-purple-500/10 p-4 text-purple-400 ring-1 ring-purple-500/50">
                        <Music className="h-8 w-8" />
                    </div>
                    <h1 className="mb-4 text-5xl font-black tracking-tighter sm:text-7xl md:text-8xl">
                        Sonic <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Journeys</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-slate-400">
                        Deep House. Afro-Tech. Melodic Techno. <br />
                        Curating atmospheres that move the soul and the feet.
                    </p>
                </div>
            </section>

            {/* Mixes Section */}
            <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Latest Mixes</h2>
                <div className="grid grid-cols-1 gap-8">
                    {/* Mix 1: Afro House Beats */}
                    <div className="w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
                        <iframe
                            width="100%"
                            height="166"
                            scrolling="no"
                            frameBorder="no"
                            allow="autoplay"
                            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/warren-kabuchi-1/mix-afro-house-beats-dance&color=%23a855f7&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                        </iframe>
                    </div>

                    {/* Mix 2: All Around The World */}
                    <div className="w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
                        <iframe
                            width="100%"
                            height="166"
                            scrolling="no"
                            frameBorder="no"
                            allow="autoplay"
                            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/warren-kabuchi-1/all-around-the-world&color=%23a855f7&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                        </iframe>
                    </div>

                    {/* Mix 3: ke0pdhvft90d */}
                    <div className="w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
                        <iframe
                            width="100%"
                            height="166"
                            scrolling="no"
                            frameBorder="no"
                            allow="autoplay"
                            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/warren-kabuchi-1/ke0pdhvft90d&color=%23a855f7&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                        </iframe>
                    </div>
                </div>
            </section>

            {/* Booking Section */}
            <section className="py-24 px-4 md:px-8 bg-slate-900/50 border-t border-slate-800">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Book Me</h2>
                        <p className="text-slate-400">
                            Available for clubs, festivals, and private events. <br />
                            Fill out the form below to get the conversation started.
                        </p>
                    </div>

                    <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-2xl">
                        <BookingForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
