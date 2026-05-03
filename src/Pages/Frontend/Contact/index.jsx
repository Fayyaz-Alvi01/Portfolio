import { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import {
  GithubOutlined, LinkedinOutlined,
  MailOutlined, WhatsAppOutlined,
  SendOutlined, EnvironmentOutlined, PhoneOutlined
} from '@ant-design/icons';
import './contact.scss';

const { TextArea } = Input;

const contactInfo = [
  {
    icon: <MailOutlined />,
    label: 'Email',
    value: 'fayyazalvi7@gmail.com',
    href: 'mailto:fayyazalvi7@gmail.com',
  },
  {
    icon: <GithubOutlined />,
    label: 'GitHub',
    value: 'github.com/Fayyaz-Alvi01',
    href: 'https://github.com/Fayyaz-Alvi01',
  },
  {
    icon: <LinkedinOutlined />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/muhammad-fayyaz-ahmed-b486a33ab',
    href: 'https://www.linkedin.com/in/muhammad-fayyaz-ahmed-b486a33ab',
  },
  {
    icon: <WhatsAppOutlined />,
    label: 'WhatsApp',
    value: '+92 317 3554782',
    href: 'https://wa.me/923173554782',
  },
  {
    icon: <PhoneOutlined />,
    label: 'Phone',
    value: '+92 317 3554782',
    href: 'tel:+923173554782',
  },
  {
    icon: <EnvironmentOutlined />,
    label: 'Location',
    value: 'Faisalabad, Pakistan',
    href: null,
  },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success('Message sent! I will reply within 24 hours.');
      form.resetFields();
    }, 1500);
  };

  return (
    <section className="contact section-wrapper">
      <h2 className="section-title">Get In <span>Touch</span></h2>
      <p className="section-sub">
        Open to jobs, internships, freelance projects & collaborations
      </p>

      <div className="contact__grid">
        {/* Left — Info */}
        <div className="contact__info">
          <div className="contact__intro">
            <h3>Let's Work Together</h3>
            <p>
              I'm currently available for full-time roles, internships, and
              freelance projects. Whether you have a project in mind or just
              want to connect — my inbox is always open.
            </p>
          </div>

          <div className="contact__links">
            {contactInfo.map((item, i) => (
              <div className="contact-link" key={i}>
                <div className="contact-link__icon">{item.icon}</div>
                <div className="contact-link__text">
                  <span className="contact-link__label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="contact__availability">
            <span className="dot" />
            Available for opportunities — Response within 24hrs
          </div>
        </div>

        {/* Right — Form */}
        <div className="contact__form-card">
          <h3>Send a Message</h3>
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            requiredMark={false}
          >
            <div className="form-row">
              <Form.Item
                name="name"
                label="Your Name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input placeholder="John Doe" className="custom-input" />
              </Form.Item>

              <Form.Item
                name="email"
                label="Your Email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Enter a valid email' }
                ]}
              >
                <Input placeholder="john@example.com" className="custom-input" />
              </Form.Item>
            </div>

            <Form.Item
              name="subject"
              label="Subject"
              rules={[{ required: true, message: 'Please enter subject' }]}
            >
              <Input placeholder="Project Inquiry / Job Offer / Collaboration"
                className="custom-input" />
            </Form.Item>

            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: 'Please enter your message' }]}
            >
              <TextArea
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="custom-input"
              />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              icon={<SendOutlined />}
              size="large"
              block
              className="contact-submit-btn"
            >
              Send Message
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
}