import { Html, Head, Font, Preview, Heading, Section, Text} from '@react-email/components';

interface VerificationEmailProps {
    username: String,
    otp: String
}

export default function VerificationEmail({
  username,
  otp,
}: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>

        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>

      <Preview>Your verification code is {otp}</Preview>

      <Section
        style={{
          fontFamily: 'Roboto, Verdana, sans-serif',
          padding: '20px',
        }}
      >
        <Heading>Verify Your Account</Heading>

        <Text>Hello {username},</Text>

        <Text>
          Use the following verification code to verify your account:
        </Text>

        <Text
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
            letterSpacing: '8px',
            textAlign: 'center',
          }}
        >
          {otp}
        </Text>

        <Text>
          This code will expire shortly. If you did not request this code,
          you can safely ignore this email.
        </Text>
      </Section>
    </Html>
  );
}