import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const API_KEY = "b86d7f639f89290017a1dc867168d5b1-us12"; // Replace with your Mailchimp API Key
    const AUDIENCE_ID = "1d99ed3a87"; // Replace with your Mailchimp Audience ID
    const DATACENTER = "us12"; // Extracted from the API Key

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    const data = {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: name,
        MESSAGE: message, // Optional custom field
      },
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        res.status(200).json({ message: "Subscription successful!" });
      } else {
        const errorData = await response.json();
        res
          .status(400)
          .json({ message: errorData.detail || "Subscription failed." });
      }
    } catch (err) {
      console.error("Error:", err);
      res.status(500).json({ message: "Internal server error." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: "Method not allowed" });
  }
}
