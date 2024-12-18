import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-24 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2">Phone</label>
                <Input id="phone" type="tel" placeholder="Your phone number" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <Textarea id="message" placeholder="Your message" className="min-h-[120px]" />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Address</h3>
                <p className="text-gray-300">123 Business Street, City, State, PIN</p>
              </div>
              <div>
                <h3 className="text-xl mb-2">Phone</h3>
                <p className="text-gray-300">+91 1234567890</p>
              </div>
              <div>
                <h3 className="text-xl mb-2">Email</h3>
                <p className="text-gray-300">idoonlineap@gmail.com</p>
              </div>
              <div>
                <h3 className="text-xl mb-2">Business Hours</h3>
                <p className="text-gray-300">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-300">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;