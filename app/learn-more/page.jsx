import { Button } from "@/components/ui/Button"
import { BookOpen, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const page = () => {
    const teamMembers = [
        { name: "Tim John", role: "Founder & CEO", image: "/placeholder.svg?height=200&width=200" },
        { name: "John Smith", role: "Lead Instructor", image: "/placeholder.svg?height=200&width=200" },
        { name: "Alice Johnson", role: "Curriculum Designer", image: "/placeholder.svg?height=200&width=200" },
        { name: "Bob Williams", role: "Community Manager", image: "/placeholder.svg?height=200&width=200" },
    ]
    return (
        <div>
            <main className="container mx-auto px-4 py-12 bg-gray-800 text-white">
                <section className="mb-16">
                    <h1 className="text-4xl font-bold mb-6 text-center">Our Purpose</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
                        At LearnStart, we believe in the power of knowledge to transform lives. Our purpose is to provide accessible, 
                        high-quality workshops and courses that give individuals a strong foundation in their chosen fields. We're 
                        committed to fostering a community of lifelong learners and empowering people to achieve their goals.
                    </p>
                </section>

                <section>
                <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                            <Image 
                                src={member.image} 
                                alt={member.name} 
                                width={200} 
                                height={200} 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                            <h3 className="text-xl font-semibold mb-1 text-center">{member.name}</h3>
                            <p className="text-gray-400 mb-4 text-center">{member.role}</p>
                            <div className="flex justify-center space-x-4">
                                <Link href="#" className="text-gray-400 hover:text-blue-500">
                                <Twitter className="h-5 w-5" />
                                </Link>
                                <Link href="#" className="text-gray-400 hover:text-blue-500">
                                <Linkedin className="h-5 w-5" />
                                </Link>
                                <Link href="#" className="text-gray-400 hover:text-blue-500">
                                <Github className="h-5 w-5" />
                                </Link>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
                </section>

                <section className="mt-16">
                    <div className="bg-gray-700 rounded-lg p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
                        <p className="text-gray-300 mb-6">
                        We're always looking for passionate educators and industry experts to join our team. 
                        If you're excited about sharing your knowledge and helping others grow, we'd love to hear from you.
                        </p>
                        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                            Apply to Teach
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default page
