"use client";
import {
  VStack,
  Button,
  Heading,
  chakra,
  Text,
  Input,
  Textarea,
  HStack,
  Box,
  Fieldset,
  Field,
} from "@chakra-ui/react";
import React, { useState, useRef, FormEvent, ChangeEvent } from "react";
import { IoSend } from "react-icons/io5";
import emailjs from '@emailjs/browser';
import { Toaster, toaster } from "@/components/ui/toaster"

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      );


      setName("");
      setEmail("");
      setMessage("");
      toaster.success({
        title: "email sent",
        description: "message sent successfully!",
      })
      console.log("email sent");
    } catch (error) {
      console.error('Error sending email:', error);
      toaster.error({
        title: "error sending email",
        description: "failed to send message. try again.",
      })

    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setter: (value: string) => void) => {
    setter(e.target.value);
  };

  return (
    <Box
      id="contact"
      m="auto"
      mt="1rem"
      mb="1rem"
      width={{ base: "100%", sm: "100%", md: "50%" }}
    >
      <VStack alignItems="stretch">
        <Heading size="xl" textAlign="center">
          contact
        </Heading>
        <Text textAlign="center" color="gray.500" maxW="2xl" mx="auto">
          feel free to reach out. i&apos;m always open to discussing new projects,
          creative ideas or just to say hi.
        </Text>
        <chakra.form ref={formRef} onSubmit={handleSubmit} width="100%">
          <Fieldset.Root>
            <VStack alignItems="stretch">
              <Fieldset.Legend></Fieldset.Legend>

              <Fieldset.Content>
                <VStack gap={4} alignItems="stretch">
                  <HStack gap={4}>
                    <Field.Root flexGrow={1} id="first-name" required>
                      <Field.Label srOnly>First Name</Field.Label>
                      <Input
                        borderRadius="lg"
                        placeholder="name"
                        value={name}
                        onChange={(e) => handleInputChange(e, setName)}
                        name="name"
                      />
                    </Field.Root>
                    <Field.Root flexGrow={1} id="email" required>
                      <Field.Label srOnly>Email Address</Field.Label>
                      <Input
                        type="email"
                        borderRadius="lg"
                        placeholder="email"
                        value={email}
                        onChange={(e) => handleInputChange(e, setEmail)}
                        name="email"
                      />
                    </Field.Root>
                  </HStack>

                  <Field.Root id="message" required>
                    <Field.Label srOnly>Message</Field.Label>
                    <Textarea
                      placeholder="message"
                      borderRadius="lg"
                      value={message}
                      onChange={(e) => handleInputChange(e, setMessage)}
                      rows={4}
                      name="message"
                    />
                  </Field.Root>
                  <Button
                    borderRadius="lg"
                    type="submit"
                    colorScheme="blue"
                    variant="solid"
                    display="flex"
                    alignItems="center"
                    gap={2}
                    loading={isLoading}
                    loadingText="Sending..."
                  >
                    send
                    <IoSend size={20} className="send-icon" />
                  </Button>
                </VStack>
              </Fieldset.Content>
            </VStack>
          </Fieldset.Root>
        </chakra.form>
      </VStack>
      <Toaster />
    </Box>
  );
}

export default Contact;
