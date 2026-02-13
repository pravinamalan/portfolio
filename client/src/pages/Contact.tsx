import * as React from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Sparkles, ArrowRight, Crown } from "lucide-react";

import Seo from "@/components/Seo";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Background from "@/components/Background";
import MagneticButton from "@/components/MagneticButton";
import { useToast } from "@/hooks/use-toast";
import { api } from "@shared/routes";
import { useCreateDemoRequest } from "@/hooks/use-demo-requests";
import { useCreateContactMessage } from "@/hooks/use-contact";
import { Reveal } from "@/components/Reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

function useQueryParams() {
  const [loc] = useLocation();
  const idx = loc.indexOf("?");
  return React.useMemo(() => new URLSearchParams(idx >= 0 ? loc.slice(idx) : ""), [loc]);
}

const demoSchema = api.demoRequests.create.input;
type DemoForm = z.infer<typeof demoSchema>;

const contactSchema = api.contact.create.input;
type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [, setLocation] = useLocation();
  const params = useQueryParams();
  const intent = (params.get("intent") || "contact") as "contact" | "demo";
  const plan = params.get("plan") || "";

  const [tab, setTab] = React.useState<"demo" | "contact">(intent === "demo" ? "demo" : "contact");

  const { toast } = useToast();
  const createDemo = useCreateDemoRequest();
  const createContact = useCreateContactMessage();

  const demoForm = useForm<DemoForm>({
    resolver: zodResolver(demoSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      communitySize: plan ? `Interested plan: ${plan}` : "",
      message: "",
    },
    mode: "onChange",
  });

  const contactForm = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { fullName: "", email: "", subject: "", message: "" },
    mode: "onChange",
  });

  async function submitDemo(values: DemoForm) {
    try {
      await createDemo.mutateAsync(values);
      toast({
        title: "Request received",
        description: "We’ll reach out shortly with a tailored walkthrough.",
      });
      demoForm.reset();
      setTimeout(() => setLocation("/"), 600);
    } catch (e) {
      toast({
        title: "Could not submit",
        description: e instanceof Error ? e.message : "Unknown error",
        variant: "destructive",
      });
    }
  }

  async function submitContact(values: ContactForm) {
    try {
      await createContact.mutateAsync(values);
      toast({
        title: "Message sent",
        description: "Thanks—our team will get back to you soon.",
      });
      contactForm.reset();
    } catch (e) {
      toast({
        title: "Could not send",
        description: e instanceof Error ? e.message : "Unknown error",
        variant: "destructive",
      });
    }
  }

  return (
    <>
      <Seo
        title="Contact — ApartEase"
        description="Request a demo or contact ApartEase sales. Premium community operations with deep navy + gold aesthetics."
      />
      <Background />
      <SiteNav />

      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-4 pt-14 pb-16 sm:px-6 lg:px-8" data-testid="contact">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <Reveal className="lg:col-span-5">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 sm:p-10 shadow-[0_30px_110px_hsl(0_0%_0%/0.55)]">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground">
                  <Mail className="h-3.5 w-3.5 text-primary" />
                  Contact
                </div>

                <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">
                  Let’s make your community feel flagship.
                </h1>
                <p className="mt-3 text-sm text-muted-foreground">
                  Request a demo for a tailored walkthrough, or send a message and we’ll respond quickly.
                </p>

                <div className="mt-7 grid gap-3">
                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.05]">
                        <Sparkles className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">Demo walkthrough</div>
                        <div className="text-xs text-muted-foreground">See features on your scenario</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.05]">
                        <Crown className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">White-glove onboarding</div>
                        <div className="text-xs text-muted-foreground">Professional & Enterprise</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-7">
                  <MagneticButton
                    variant="secondary"
                    size="sm"
                    data-testid="contact-back-home"
                    onClick={() => {
                      setLocation("/");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Back to overview
                  </MagneticButton>
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.06}>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8 shadow-[0_30px_110px_hsl(0_0%_0%/0.55)]">
                <Tabs value={tab} onValueChange={(v) => setTab(v as "demo" | "contact")}>
                  <TabsList className="grid w-full grid-cols-2" data-testid="contact-tabs">
                    <TabsTrigger value="demo" data-testid="contact-tab-demo">
                      Request demo
                    </TabsTrigger>
                    <TabsTrigger value="contact" data-testid="contact-tab-message">
                      Send message
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="demo" className="mt-6">
                    <form
                      onSubmit={demoForm.handleSubmit(submitDemo)}
                      className="grid gap-4"
                      data-testid="demo-form"
                    >
                      <div className="grid gap-2">
                        <Label htmlFor="demo-fullName">Full name</Label>
                        <Input
                          id="demo-fullName"
                          placeholder="Your name"
                          {...demoForm.register("fullName")}
                          data-testid="demo-fullName"
                          className="h-12 rounded-2xl bg-background/40"
                        />
                        {demoForm.formState.errors.fullName && (
                          <div className="text-xs text-destructive">
                            {demoForm.formState.errors.fullName.message}
                          </div>
                        )}
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="demo-email">Email</Label>
                        <Input
                          id="demo-email"
                          type="email"
                          placeholder="you@company.com"
                          {...demoForm.register("email")}
                          data-testid="demo-email"
                          className="h-12 rounded-2xl bg-background/40"
                        />
                        {demoForm.formState.errors.email && (
                          <div className="text-xs text-destructive">{demoForm.formState.errors.email.message}</div>
                        )}
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="grid gap-2">
                          <Label htmlFor="demo-company">Company</Label>
                          <Input
                            id="demo-company"
                            placeholder="Company / Property group"
                            {...demoForm.register("company")}
                            data-testid="demo-company"
                            className="h-12 rounded-2xl bg-background/40"
                          />
                          {demoForm.formState.errors.company && (
                            <div className="text-xs text-destructive">{demoForm.formState.errors.company.message}</div>
                          )}
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="demo-communitySize">Community size</Label>
                          <Input
                            id="demo-communitySize"
                            placeholder="e.g. 120 units"
                            {...demoForm.register("communitySize")}
                            data-testid="demo-communitySize"
                            className="h-12 rounded-2xl bg-background/40"
                          />
                          {demoForm.formState.errors.communitySize && (
                            <div className="text-xs text-destructive">
                              {demoForm.formState.errors.communitySize.message}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="demo-message">Message (optional)</Label>
                        <Textarea
                          id="demo-message"
                          placeholder="Anything you want us to tailor the demo around?"
                          {...demoForm.register("message")}
                          data-testid="demo-message"
                          className="min-h-[120px] rounded-2xl bg-background/40"
                        />
                        {demoForm.formState.errors.message && (
                          <div className="text-xs text-destructive">{demoForm.formState.errors.message.message}</div>
                        )}
                      </div>

                      <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div className="text-xs text-muted-foreground">
                          We’ll respond within 1–2 business days.
                        </div>
                        <MagneticButton
                          variant="primary"
                          size="lg"
                          disabled={createDemo.isPending}
                          data-testid="demo-submit"
                          onClick={() => {
                            // form submission handled by onSubmit; keep button functional (no dead clicks)
                          }}
                          type="submit"
                        >
                          {createDemo.isPending ? "Submitting..." : "Request demo"} <ArrowRight className="h-4 w-4" />
                        </MagneticButton>
                      </div>
                    </form>
                  </TabsContent>

                  <TabsContent value="contact" className="mt-6">
                    <form
                      onSubmit={contactForm.handleSubmit(submitContact)}
                      className="grid gap-4"
                      data-testid="contact-form"
                    >
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="grid gap-2">
                          <Label htmlFor="contact-fullName">Full name</Label>
                          <Input
                            id="contact-fullName"
                            placeholder="Your name"
                            {...contactForm.register("fullName")}
                            data-testid="contact-fullName"
                            className="h-12 rounded-2xl bg-background/40"
                          />
                          {contactForm.formState.errors.fullName && (
                            <div className="text-xs text-destructive">
                              {contactForm.formState.errors.fullName.message}
                            </div>
                          )}
                        </div>

                        <div className="grid gap-2">
                          <Label htmlFor="contact-email">Email</Label>
                          <Input
                            id="contact-email"
                            type="email"
                            placeholder="you@company.com"
                            {...contactForm.register("email")}
                            data-testid="contact-email"
                            className="h-12 rounded-2xl bg-background/40"
                          />
                          {contactForm.formState.errors.email && (
                            <div className="text-xs text-destructive">{contactForm.formState.errors.email.message}</div>
                          )}
                        </div>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="contact-subject">Subject</Label>
                        <Input
                          id="contact-subject"
                          placeholder="How can we help?"
                          {...contactForm.register("subject")}
                          data-testid="contact-subject"
                          className="h-12 rounded-2xl bg-background/40"
                        />
                        {contactForm.formState.errors.subject && (
                          <div className="text-xs text-destructive">{contactForm.formState.errors.subject.message}</div>
                        )}
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="contact-message">Message</Label>
                        <Textarea
                          id="contact-message"
                          placeholder="Tell us what you're looking to improve."
                          {...contactForm.register("message")}
                          data-testid="contact-message"
                          className="min-h-[140px] rounded-2xl bg-background/40"
                        />
                        {contactForm.formState.errors.message && (
                          <div className="text-xs text-destructive">{contactForm.formState.errors.message.message}</div>
                        )}
                      </div>

                      <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div className="text-xs text-muted-foreground">We read every message.</div>
                        <MagneticButton
                          variant="primary"
                          size="lg"
                          disabled={createContact.isPending}
                          data-testid="contact-submit"
                          onClick={() => {
                            // submission handled by onSubmit
                          }}
                          type="submit"
                        >
                          {createContact.isPending ? "Sending..." : "Send message"} <ArrowRight className="h-4 w-4" />
                        </MagneticButton>
                      </div>
                    </form>
                  </TabsContent>
                </Tabs>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
