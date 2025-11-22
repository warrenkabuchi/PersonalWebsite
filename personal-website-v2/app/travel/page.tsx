import { Plane, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TravelWizard } from "@/components/travel-wizard";

export default function TravelPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 pt-16">
            {/* Hero Section */}
            <section className="relative h-[70vh] w-full overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
                    alt="Travel Hero"
                    className="absolute inset-0 h-full w-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-900/50 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-slate-300 border border-slate-700">
                        <Plane className="h-4 w-4" />
                        <span>Global Travel Consultant</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                        Curating Experiences <br /> Around the Globe.
                    </h1>
                    <p className="text-xl text-slate-300 max-w-xl mb-8">
                        From the bustling streets of Bogota to the historic alleys of London. I help you plan trips that are more than just vacations—they are journeys.
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg">
                        Plan My Trip
                    </Button>
                </div>
            </section>

            {/* Journal / Grid Section */}
            <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-white">Recent Journals</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="group cursor-pointer">
                        <div className="aspect-[4/5] overflow-hidden rounded-xl mb-4 border border-slate-800">
                            <img
                                src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2070&auto=format&fit=crop"
                                alt="Bogota"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
                            <MapPin className="h-4 w-4" />
                            <span>Bogota, Colombia</span>
                        </div>
                        <h3 className="text-2xl font-bold group-hover:text-blue-500 transition-colors text-white">Colors of La Candelaria</h3>
                    </div>

                    {/* Card 2 */}
                    <div className="group cursor-pointer">
                        <div className="aspect-[4/5] overflow-hidden rounded-xl mb-4 border border-slate-800">
                            <img
                                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop"
                                alt="London"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
                            <MapPin className="h-4 w-4" />
                            <span>London, UK</span>
                        </div>
                        <h3 className="text-2xl font-bold group-hover:text-blue-500 transition-colors text-white">A Weekend in Shoreditch</h3>
                    </div>

                    {/* Card 3 */}
                    <div className="group cursor-pointer">
                        <div className="aspect-[4/5] overflow-hidden rounded-xl mb-4 border border-slate-800">
                            <img
                                src="https://images.unsplash.com/photo-1489396160836-2c99c977e970?q=80&w=2070&auto=format&fit=crop"
                                alt="Kenya"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
                            <MapPin className="h-4 w-4" />
                            <span>Nairobi, Kenya</span>
                        </div>
                        <h3 className="text-2xl font-bold group-hover:text-blue-500 transition-colors text-white">Homecoming: The City in the Sun</h3>
                    </div>
                </div>
            </section>
            {/* Planning Wizard Section */}
            <section className="py-24 px-4 md:px-8 bg-slate-900/30 border-t border-slate-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-white">Plan Your Next Adventure</h2>
                        <p className="text-slate-400">
                            Tell me a bit about your dream trip, and let's make it happen.
                        </p>
                    </div>

                    <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-2xl">
                        <TravelWizard />
                    </div>
                </div>
            </section>
        </main>
    );
}
