import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface Props {
  fullName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  interest: string;
  message: string;
}

export default function ContactConfirmationEmail({
  fullName,
  email,
  phoneNumber,
  companyName,
  interest,
  message,
}: Props) {
  // URLs
  const logoUrl = "https://ppe-iq.com/images/meta/logo.png";
  const websiteUrl = "https://ppe-iq.com";

  return (
    <Html>
      <Head />
      <Preview>
        Thank you for contacting PPE - We&apos;ll be in touch soon!
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Thank You for Reaching Out!</Heading>

          <Text style={text}>Dear {fullName},</Text>

          <Text style={text}>
            Thank you for contacting PPE Engineering Products and Services. We
            have received your message and our team will get back to you as soon
            as possible.
          </Text>

          <Section style={detailsBox}>
            <Heading style={h2}>Your Submission Details</Heading>
            <Text style={detailText}>
              <strong>Name:</strong> {fullName}
            </Text>
            <Text style={detailText}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={detailText}>
              <strong>Phone:</strong> {phoneNumber}
            </Text>
            <Text style={detailText}>
              <strong>Company:</strong> {companyName}
            </Text>
            <Text style={detailText}>
              <strong>Area of Interest:</strong> {interest}
            </Text>
          </Section>

          {message && (
            <Section style={messageBox}>
              <Heading style={h2}>Your Message</Heading>
              <Text style={messageText}>{message}</Text>
            </Section>
          )}

          <Section style={infoBox}>
            <Text style={infoText}>
              💡 <strong>What happens next?</strong>
            </Text>
            <Text style={infoText}>
              Our team typically responds within 24-48 hours during business
              days. We&apos;ll review your inquiry and provide you with the
              information you need.
            </Text>
          </Section>

          <Text style={text}>
            In the meantime, feel free to explore our website to learn more
            about our products and services.
          </Text>

          <Text style={footer}>
            Best regards,
            <br />
            The PPE Team
          </Text>

          {/* Divider */}
          <Hr style={hr} />

          {/* Footer with logo */}
          <Section style={footerSection}>
            <Img
              src={logoUrl}
              alt="PPE Logo"
              width="300"
              height="auto"
              style={logo}
            />
            <Text style={footerText}>
              PPE Engineering Products and Services
            </Text>
            <Text style={footerLinks}>
              <Link href={websiteUrl} style={link}>
                Visit our website
              </Link>
              {" • "}
              <Link href={`${websiteUrl}/products`} style={link}>
                Our products
              </Link>
              {" • "}
              <Link href={`${websiteUrl}/training`} style={link}>
                Training courses
              </Link>
            </Text>
            <Text style={footerDisclaimer}>
              This email was sent to {email} because you submitted a contact
              form on our website.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "600px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0 30px",
  padding: "0 40px",
};

const h2 = {
  color: "#333",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "0 0 15px",
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "16px 0",
  padding: "0 40px",
};

const detailsBox = {
  backgroundColor: "#f5f5f5",
  borderRadius: "8px",
  margin: "20px 40px",
  padding: "20px",
  borderLeft: "4px solid #2196F3",
};

const messageBox = {
  backgroundColor: "#fff9e6",
  borderRadius: "8px",
  margin: "20px 40px",
  padding: "20px",
  borderLeft: "4px solid #FFC107",
};

const infoBox = {
  backgroundColor: "#e8f5e9",
  borderRadius: "8px",
  margin: "20px 40px",
  padding: "20px",
  borderLeft: "4px solid #4CAF50",
};

const detailText = {
  color: "#333",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "8px 0",
};

const messageText = {
  color: "#333",
  fontSize: "14px",
  lineHeight: "22px",
  margin: "0",
  fontStyle: "italic",
};

const infoText = {
  color: "#333",
  fontSize: "14px",
  lineHeight: "22px",
  margin: "8px 0",
};

const footer = {
  color: "#666",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "32px 0 20px",
  padding: "0 40px",
};

const hr = {
  borderColor: "#e6e6e6",
  margin: "30px 0",
};

const footerSection = {
  textAlign: "center" as const,
  padding: "0 40px 20px",
};

const logo = {
  margin: "10px auto 20px",
  display: "block",
};

const footerText = {
  color: "#666",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "10px 0",
  textAlign: "center" as const,
};

const footerLinks = {
  color: "#666",
  fontSize: "12px",
  lineHeight: "20px",
  margin: "10px 0",
  textAlign: "center" as const,
};

const link = {
  color: "#0066cc",
  textDecoration: "none",
};

const footerDisclaimer = {
  color: "#999",
  fontSize: "11px",
  lineHeight: "16px",
  margin: "20px 0 0",
  textAlign: "center" as const,
};
