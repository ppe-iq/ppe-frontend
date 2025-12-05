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

// Props
interface Props {
  fullName: string;
  courseTitle: string;
  email: string;
  phoneNumber: string;
  company: string;
  message?: string;
}

export default function CourseReservationEmail({
  fullName,
  courseTitle,
  email,
  phoneNumber,
  company,
  message,
}: Props) {
  // URLs
  const logoUrl = "https://ppe-iq.com/images/meta/logo.png";
  const websiteUrl = "https://ppe-iq.com";

  return (
    <Html>
      <Head />
      <Preview>Your reservation for {courseTitle} is confirmed</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Course Reservation Confirmation</Heading>

          <Text style={text}>Dear {fullName},</Text>

          <Text style={text}>
            Thank you for your reservation for the course:{" "}
            <strong>{courseTitle}</strong>
          </Text>

          <Section style={detailsBox}>
            <Heading style={h2}>Reservation Details</Heading>
            <Text style={detailText}>
              <strong>Course:</strong> {courseTitle}
            </Text>
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
              <strong>Company:</strong> {company}
            </Text>
            {message && (
              <Text style={detailText}>
                <strong>Message:</strong> {message}
              </Text>
            )}
          </Section>

          <Text style={text}>
            We will contact you soon with further details.
          </Text>

          <Text style={footer}>
            Best regards,
            <br />
            The PPE Team
          </Text>

          {/* Divider line */}
          <Hr style={hr} />

          {/* Logo and footer at bottom - best practice */}
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
              <Link href={`${websiteUrl}/training`} style={link}>
                Browse courses
              </Link>
              {" • "}
              <Link href={`${websiteUrl}/company/contact`} style={link}>
                Contact us
              </Link>
            </Text>
            <Text style={footerDisclaimer}>
              This email was sent to {email} because you registered for a course
              reservation.
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
};

const detailText = {
  color: "#333",
  fontSize: "14px",
  lineHeight: "24px",
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
