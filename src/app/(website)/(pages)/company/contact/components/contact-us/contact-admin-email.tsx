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
  submittedAt: string;
}

export default function ContactAdminNotificationEmail({
  fullName,
  email,
  phoneNumber,
  companyName,
  interest,
  message,
  submittedAt,
}: Props) {
  // URLs
  const logoUrl = "https://ppe-iq.com/images/meta/logo.png";
  const websiteUrl = "https://ppe-iq.com";
  const adminDashboardUrl = `${websiteUrl}/admin/contact/contactmessage/`;

  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {fullName}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Alert banner */}
          <Section style={alertBanner}>
            <Text style={alertText}>📧 New Contact Form Submission</Text>
          </Section>

          <Heading style={h1}>New Contact Inquiry Received</Heading>

          <Section style={contactInfoBox}>
            <Heading style={h2}>Contact Information</Heading>
            <Text style={detailText}>
              <strong>Name:</strong> {fullName}
            </Text>
            <Text style={detailText}>
              <strong>Email:</strong>{" "}
              <Link href={`mailto:${email}`} style={emailLink}>
                {email}
              </Link>
            </Text>
            <Text style={detailText}>
              <strong>Phone:</strong>{" "}
              <Link href={`tel:${phoneNumber}`} style={phoneLink}>
                {phoneNumber}
              </Link>
            </Text>
            <Text style={detailText}>
              <strong>Company:</strong> {companyName}
            </Text>
          </Section>

          <Section style={interestBox}>
            <Heading style={h2}>Area of Interest</Heading>
            <Text style={interestText}>{interest}</Text>
          </Section>

          {message && (
            <Section style={messageBox}>
              <Heading style={h2}>Message from Customer</Heading>
              <Text style={messageText}>{message}</Text>
            </Section>
          )}

          <Section style={metaBox}>
            <Text style={metaText}>
              <strong>Submitted:</strong> {submittedAt}
            </Text>
          </Section>

          {/* Quick Actions */}
          <Section style={actionsBox}>
            <Heading style={h3}>Quick Actions</Heading>
            <Text style={actionText}>
              📧{" "}
              <Link href={`mailto:${email}`} style={actionLink}>
                Reply via Email
              </Link>
            </Text>
            <Text style={actionText}>
              📞{" "}
              <Link href={`tel:${phoneNumber}`} style={actionLink}>
                Call {phoneNumber}
              </Link>
            </Text>
            <Text style={actionText}>
              🗂️{" "}
              <Link href={adminDashboardUrl} style={actionLink}>
                View in Admin Dashboard
              </Link>
            </Text>
          </Section>

          {/* Call to action button */}
          <Section style={ctaSection}>
            <Link href={`mailto:${email}`} style={button}>
              Reply to Customer →
            </Link>
          </Section>

          <Text style={footer}>
            This notification was automatically sent when a new contact form was
            submitted.
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
            <Text style={footerText}>Admin Notification System</Text>
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

const alertBanner = {
  backgroundColor: "#2196F3",
  padding: "15px",
  textAlign: "center" as const,
  borderRadius: "8px 8px 0 0",
};

const alertText = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "bold",
  margin: 0,
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "30px 0 20px",
  padding: "0 40px",
};

const h2 = {
  color: "#333",
  fontSize: "16px",
  fontWeight: "bold",
  margin: "0 0 12px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
};

const h3 = {
  color: "#333",
  fontSize: "14px",
  fontWeight: "bold",
  margin: "0 0 10px",
};

const contactInfoBox = {
  backgroundColor: "#f5f5f5",
  borderRadius: "8px",
  margin: "20px 40px",
  padding: "20px",
  borderLeft: "4px solid #2196F3",
};

const interestBox = {
  backgroundColor: "#e3f2fd",
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

const metaBox = {
  backgroundColor: "#fafafa",
  borderRadius: "8px",
  margin: "20px 40px",
  padding: "15px 20px",
  borderLeft: "4px solid #9E9E9E",
};

const actionsBox = {
  backgroundColor: "#f0f9ff",
  borderRadius: "8px",
  margin: "20px 40px",
  padding: "20px",
  borderLeft: "4px solid #0288D1",
};

const detailText = {
  color: "#333",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "8px 0",
};

const interestText = {
  color: "#1565C0",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "24px",
  margin: "0",
};

const messageText = {
  color: "#333",
  fontSize: "14px",
  lineHeight: "22px",
  margin: "0",
  fontStyle: "italic",
  whiteSpace: "pre-wrap" as const,
};

const metaText = {
  color: "#666",
  fontSize: "13px",
  lineHeight: "20px",
  margin: "0",
};

const actionText = {
  color: "#333",
  fontSize: "14px",
  lineHeight: "28px",
  margin: "4px 0",
};

const emailLink = {
  color: "#2196F3",
  textDecoration: "none",
};

const phoneLink = {
  color: "#2196F3",
  textDecoration: "none",
};

const actionLink = {
  color: "#0288D1",
  textDecoration: "none",
  fontWeight: "500",
};

const ctaSection = {
  textAlign: "center" as const,
  margin: "30px 0",
};

const button = {
  backgroundColor: "#2196F3",
  borderRadius: "6px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "14px 28px",
};

const footer = {
  color: "#999",
  fontSize: "12px",
  lineHeight: "20px",
  margin: "20px 0",
  padding: "0 40px",
  textAlign: "center" as const,
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
  margin: "5px 0",
  textAlign: "center" as const,
};
