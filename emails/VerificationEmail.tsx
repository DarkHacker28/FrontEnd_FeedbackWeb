import {
    Html,
    Head,
    Font,
    Preview,
    Heading,
    Row,
    Section,
    Text,
    Button
} from "@react-email/components";

interface VerificationEmailProps {
    username: string;
    otp: string;
}

export default function VerificationEmail({ username, otp} : VerificationEmailProps) {
    return (
        <Html lang="em" dir="ltr">
            <Head>
                <title>Verification Code</title>
                <Font 
                fontFamily="Roboto"
                fallbackFontFamily="Verdana"
                webFOnt={{
                    url: 'http://fonts.gstatic.com/s/roboto/v27/KFOmCnqEn92Fr1Mu4mxKKTU1Kg.woff2',
                    format: 'w0ff2',
                }}
                fontWeight={400}
                fontStyle="normal"
                />
            </Head>
            <Preview>Here&apos;s your verification code: {otp}</Preview>
            <Section>
                <Row>
                    <Heading as="h2">Hello {username},</Heading>
                </Row>
                <Row>
                    <Text>
                        Thank you for registering. Please use the 
                        following verification
                        code to complete you registration:
                    </Text>
                </Row>
                <Row>
                    <Text>{otp}</Text>
                </Row>
                <Row>
                    <Text>
                        If you did not request this code, please ignore 
                        this email.
                    </Text>
                </Row>
                {/* <Row>
                <Button
                  href={`https://localhost:3000/verify/${usernmae}`}
                  style={{color: '#61dafb}}
                  >
                  Verify here
                  </Button>
                </Row> */}
            </Section>
        </Html>
    );
}