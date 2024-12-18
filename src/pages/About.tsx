import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-24 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-6">
            Welcome to Sumanth Associates, your trusted partner for all financial and documentation services. With years of experience in the industry, we've built a reputation for excellence and reliability.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p>To simplify complex financial and documentation processes, making them accessible and hassle-free for our clients.</p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p>To become the leading one-stop solution for all financial services and documentation needs in our region.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;