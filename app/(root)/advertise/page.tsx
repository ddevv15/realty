"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  FileText,
  HeadphonesIcon,
  BarChart3,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const benefits = [
  {
    icon: Target,
    title: "High-Intent Audience",
    description:
      "Reach serious buyers and renters actively searching for properties like yours.",
  },
  {
    icon: FileText,
    title: "Professional Listing Pages",
    description:
      "Beautiful, detailed property pages that showcase your property's best features.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description:
      "Get personalized assistance from our team throughout your listing journey.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Pricing Insights",
    description:
      "Access market analytics and pricing recommendations to maximize your return.",
  },
] as const;

const steps = [
  {
    number: 1,
    title: "Share Your Property Details",
    description:
      "Fill out our simple form with your property information, location, and preferences.",
  },
  {
    number: 2,
    title: "We Review and Enhance Your Listing",
    description:
      "Our team reviews your submission and enhances it with professional photography and descriptions.",
  },
  {
    number: 3,
    title: "Go Live on DevBrows Realty",
    description:
      "Your property goes live and reaches thousands of potential buyers and renters.",
  },
  {
    number: 4,
    title: "Get Leads and Track Interest",
    description:
      "Receive qualified leads and track interest through our analytics dashboard.",
  },
] as const;

const packages = [
  {
    name: "Basic",
    description: "Perfect for individual property owners",
    price: "Contact for pricing",
    features: [
      "Standard listing page",
      "Basic photo gallery",
      "Property description",
      "Contact form",
      "30-day listing period",
    ],
  },
  {
    name: "Featured",
    description: "Ideal for multiple properties or small portfolios",
    price: "Contact for pricing",
    features: [
      "Everything in Basic",
      "Enhanced photo gallery",
      "Priority placement in search",
      "Social media promotion",
      "60-day listing period",
      "Lead tracking dashboard",
    ],
  },
  {
    name: "Premium Spotlight",
    description: "Best for developers and large portfolios",
    price: "Contact for pricing",
    features: [
      "Everything in Featured",
      "Professional photography included",
      "Video tour support",
      "Top placement in search results",
      "Dedicated account manager",
      "90-day listing period",
      "Advanced analytics",
      "Custom marketing campaigns",
    ],
  },
] as const;

export default function AdvertisePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    propertyLocation: "",
    listingType: "",
    propertyType: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    if (!phone) return true; // Phone is optional
    const phoneRegex = /^[\d\s\-\(\)\+]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 10;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.propertyLocation.trim()) {
      newErrors.propertyLocation = "Property location is required";
    }

    if (!formData.listingType) {
      newErrors.listingType = "Please select a listing type";
    }

    if (!formData.propertyType) {
      newErrors.propertyType = "Please select a property type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        propertyLocation: "",
        listingType: "",
        propertyType: "",
        budget: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      // Handle error (in real app)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main id="advertise-page" className="bg-background">
      {/* Hero Section */}
      <section
        id="advertise-hero"
        className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 md:py-32"
      >
        <div
          id="advertise-hero-container"
          className="container mx-auto max-w-7xl px-4"
        >
          <div
            id="advertise-hero-content"
            className="mx-auto max-w-3xl text-center space-y-6 animate-in fade-in duration-700"
          >
            <h1
              id="advertise-hero-title"
              className="text-4xl font-bold md:text-5xl lg:text-6xl text-foreground"
            >
              Advertise Your Property With DevBrows Realty
            </h1>
            <p
              id="advertise-hero-subtitle"
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Reach serious buyers and renters with our professional listing
              platform. We help owners, landlords, and developers showcase their
              properties to the right audience.
            </p>
            <div
              id="advertise-hero-ctas"
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <Button
                id="advertise-hero-cta-primary"
                size="lg"
                onClick={() => scrollToSection("advertise-form")}
                className="group transition-all hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                id="advertise-hero-cta-secondary"
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("advertise-benefits")}
                className="transition-all hover:scale-105"
              >
                View Benefits
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="advertise-benefits"
        className="border-b border-border bg-background py-16 md:py-24"
      >
        <div
          id="advertise-benefits-container"
          className="container mx-auto max-w-7xl px-4"
        >
          <div
            id="advertise-benefits-header"
            className="text-center mb-12 md:mb-16"
          >
            <h2
              id="advertise-benefits-title"
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Why Advertise With Us
            </h2>
            <p
              id="advertise-benefits-subtitle"
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              We provide everything you need to successfully market your
              property and connect with qualified buyers and renters.
            </p>
          </div>
          <div
            id="advertise-benefits-grid"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={benefit.title}
                  id={`advertise-benefit-${index + 1}`}
                  className="p-6 transition-all hover:shadow-lg hover:-translate-y-1 group"
                >
                  <div
                    id={`advertise-benefit-icon-${index + 1}`}
                    className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors"
                  >
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3
                    id={`advertise-benefit-title-${index + 1}`}
                    className="text-lg font-semibold text-foreground mb-2"
                  >
                    {benefit.title}
                  </h3>
                  <p
                    id={`advertise-benefit-description-${index + 1}`}
                    className="text-sm text-muted-foreground"
                  >
                    {benefit.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="advertise-steps"
        className="border-b border-border bg-muted/30 py-16 md:py-24"
      >
        <div
          id="advertise-steps-container"
          className="container mx-auto max-w-7xl px-4"
        >
          <div
            id="advertise-steps-header"
            className="text-center mb-12 md:mb-16"
          >
            <h2
              id="advertise-steps-title"
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              How It Works
            </h2>
            <p
              id="advertise-steps-subtitle"
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Getting your property listed is simple and straightforward.
            </p>
          </div>
          <div
            id="advertise-steps-list"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative"
          >
            {steps.map((step, index) => (
              <div
                key={step.number}
                id={`advertise-step-${step.number}`}
                className="relative"
              >
                <div
                  id={`advertise-step-number-${step.number}`}
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4 relative z-10 mx-auto md:mx-0"
                >
                  {step.number}
                </div>
                <h3
                  id={`advertise-step-title-${step.number}`}
                  className="text-lg font-semibold text-foreground mb-2 text-center md:text-left"
                >
                  {step.title}
                </h3>
                <p
                  id={`advertise-step-description-${step.number}`}
                  className="text-sm text-muted-foreground text-center md:text-left"
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section
        id="advertise-packages"
        className="border-b border-border bg-background py-16 md:py-24"
      >
        <div
          id="advertise-packages-container"
          className="container mx-auto max-w-7xl px-4"
        >
          <div
            id="advertise-packages-header"
            className="text-center mb-12 md:mb-16"
          >
            <h2
              id="advertise-packages-title"
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Advertising Packages
            </h2>
            <p
              id="advertise-packages-subtitle"
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Choose the package that best fits your needs. All packages include
              our core listing features.
            </p>
          </div>
          <div
            id="advertise-packages-grid"
            className="grid gap-8 md:grid-cols-3"
          >
            {packages.map((pkg, index) => (
              <Card
                key={pkg.name}
                id={`advertise-package-${pkg.name.toLowerCase()}`}
                className={`p-8 flex flex-col transition-all hover:shadow-lg hover:-translate-y-1 ${
                  index === 1
                    ? "border-2 border-primary shadow-md scale-105"
                    : ""
                }`}
              >
                {index === 1 && (
                  <div
                    id={`advertise-package-badge-${pkg.name.toLowerCase()}`}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 w-fit"
                  >
                    <Star className="h-3 w-3" />
                    Most Popular
                  </div>
                )}
                <h3
                  id={`advertise-package-name-${pkg.name.toLowerCase()}`}
                  className="text-2xl font-bold text-foreground mb-2"
                >
                  {pkg.name}
                </h3>
                <p
                  id={`advertise-package-description-${pkg.name.toLowerCase()}`}
                  className="text-sm text-muted-foreground mb-6"
                >
                  {pkg.description}
                </p>
                <div
                  id={`advertise-package-price-${pkg.name.toLowerCase()}`}
                  className="text-3xl font-bold text-primary mb-6"
                >
                  {pkg.price}
                </div>
                <ul
                  id={`advertise-package-features-${pkg.name.toLowerCase()}`}
                  className="space-y-3 mb-8 flex-1"
                >
                  {pkg.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      id={`advertise-package-feature-${pkg.name.toLowerCase()}-${featureIndex}`}
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  id={`advertise-package-cta-${pkg.name.toLowerCase()}`}
                  variant={index === 1 ? "default" : "outline"}
                  className="w-full transition-all hover:scale-105"
                  onClick={() => scrollToSection("advertise-form")}
                >
                  Request This Package
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section
        id="advertise-form"
        className="border-b border-border bg-muted/30 py-16 md:py-24"
      >
        <div
          id="advertise-form-container"
          className="container mx-auto max-w-3xl px-4"
        >
          <Card id="advertise-form-card" className="p-8 md:p-12">
            <div id="advertise-form-header" className="text-center mb-8">
              <h2
                id="advertise-form-title"
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              >
                List Your Property With Us
              </h2>
              <p id="advertise-form-subtitle" className="text-muted-foreground">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>
            </div>

            {submitted && (
              <div
                id="advertise-form-success"
                className="mb-6 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-300"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-medium">
                    Thanks! We&apos;ll reach out soon. (Demo state only)
                  </span>
                </div>
              </div>
            )}

            <form
              id="advertise-form-element"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div id="advertise-form-field-fullname" className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-foreground"
                >
                  Full Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={errors.fullName ? "border-destructive" : ""}
                  aria-invalid={!!errors.fullName}
                  aria-describedby={
                    errors.fullName ? "fullName-error" : undefined
                  }
                />
                {errors.fullName && (
                  <p
                    id="fullName-error"
                    className="text-sm text-destructive"
                    role="alert"
                  >
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div id="advertise-form-field-email" className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground"
                >
                  Email <span className="text-destructive">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={errors.email ? "border-destructive" : ""}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="text-sm text-destructive"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              <div id="advertise-form-field-phone" className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground"
                >
                  Phone{" "}
                  <span className="text-muted-foreground">(Optional)</span>
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className={errors.phone ? "border-destructive" : ""}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p
                    id="phone-error"
                    className="text-sm text-destructive"
                    role="alert"
                  >
                    {errors.phone}
                  </p>
                )}
              </div>

              <div id="advertise-form-field-location" className="space-y-2">
                <label
                  htmlFor="propertyLocation"
                  className="block text-sm font-medium text-foreground"
                >
                  Property Location <span className="text-destructive">*</span>
                </label>
                <Input
                  id="propertyLocation"
                  name="propertyLocation"
                  type="text"
                  value={formData.propertyLocation}
                  onChange={handleChange}
                  placeholder="City, Neighborhood, or Area"
                  className={
                    errors.propertyLocation ? "border-destructive" : ""
                  }
                  aria-invalid={!!errors.propertyLocation}
                  aria-describedby={
                    errors.propertyLocation
                      ? "propertyLocation-error"
                      : undefined
                  }
                />
                {errors.propertyLocation && (
                  <p
                    id="propertyLocation-error"
                    className="text-sm text-destructive"
                    role="alert"
                  >
                    {errors.propertyLocation}
                  </p>
                )}
              </div>

              <div id="advertise-form-field-listing-type" className="space-y-2">
                <label
                  htmlFor="listingType"
                  className="block text-sm font-medium text-foreground"
                >
                  Listing Type <span className="text-destructive">*</span>
                </label>
                <Select
                  value={formData.listingType}
                  onValueChange={(value) =>
                    handleSelectChange("listingType", value)
                  }
                >
                  <SelectTrigger
                    id="listingType"
                    className={
                      errors.listingType ? "border-destructive" : "w-full"
                    }
                    aria-invalid={!!errors.listingType}
                    aria-describedby={
                      errors.listingType ? "listingType-error" : undefined
                    }
                  >
                    <SelectValue placeholder="Select listing type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="for-sale">For Sale</SelectItem>
                    <SelectItem value="for-rent">For Rent</SelectItem>
                    <SelectItem value="new-development">
                      New Development
                    </SelectItem>
                  </SelectContent>
                </Select>
                {errors.listingType && (
                  <p
                    id="listingType-error"
                    className="text-sm text-destructive"
                    role="alert"
                  >
                    {errors.listingType}
                  </p>
                )}
              </div>

              <div
                id="advertise-form-field-property-type"
                className="space-y-2"
              >
                <label
                  htmlFor="propertyType"
                  className="block text-sm font-medium text-foreground"
                >
                  Property Type <span className="text-destructive">*</span>
                </label>
                <Select
                  value={formData.propertyType}
                  onValueChange={(value) =>
                    handleSelectChange("propertyType", value)
                  }
                >
                  <SelectTrigger
                    id="propertyType"
                    className={
                      errors.propertyType ? "border-destructive" : "w-full"
                    }
                    aria-invalid={!!errors.propertyType}
                    aria-describedby={
                      errors.propertyType ? "propertyType-error" : undefined
                    }
                  >
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="plot">Plot</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.propertyType && (
                  <p
                    id="propertyType-error"
                    className="text-sm text-destructive"
                    role="alert"
                  >
                    {errors.propertyType}
                  </p>
                )}
              </div>

              <div id="advertise-form-field-budget" className="space-y-2">
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-foreground"
                >
                  Approximate Budget / Expected Price
                  <span className="text-muted-foreground"> (Optional)</span>
                </label>
                <Input
                  id="budget"
                  name="budget"
                  type="text"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="$500,000 or $2,500/month"
                />
              </div>

              <div id="advertise-form-field-message" className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground"
                >
                  Message / Property Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your property..."
                  rows={5}
                  className="resize-none"
                />
              </div>

              <div
                id="advertise-form-demo-note"
                className="text-xs text-muted-foreground text-center pt-2"
              >
                <p>This is a demo interface – no data is actually submitted.</p>
              </div>

              <Button
                id="advertise-form-submit"
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Request
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </main>
  );
}
