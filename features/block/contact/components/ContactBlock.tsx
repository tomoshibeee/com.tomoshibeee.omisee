import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

import { ContactBlockData } from "@/features/block";
import { MetaData } from "@/types/meta";

type Props = ContactBlockData & {
  meta: MetaData;
};

export default function ContactBlock({
  title = "お問い合わせ",
  description = "礼拝や集会、見学についてなど、お気軽にお問い合わせください。",
  submitLabel = "メールを作成する",
  meta,
}: Props) {
  return (
    <div className="bg-slate-50 px-6 py-14">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        <div className="space-y-5">
          <div>
            <p className="text-sm font-semibold text-blue-600">Contact</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">{title}</h2>
            <p className="mt-4 leading-7 text-gray-600">{description}</p>
          </div>

          <div className="space-y-3 text-sm text-gray-700">
            <a
              href={`tel:${meta.tel}`}
              className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-sm transition hover:text-blue-600"
            >
              <FaPhone className="shrink-0 text-blue-500" />
              <span>{meta.tel}</span>
            </a>
            <a
              href={`mailto:${meta.email}`}
              className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-sm transition hover:text-blue-600"
            >
              <FaEnvelope className="shrink-0 text-blue-500" />
              <span>{meta.email}</span>
            </a>
            <div className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-sm">
              <FaLocationDot className="shrink-0 text-blue-500" />
              <span className="leading-6">
                {meta.postalCode && (
                  <>
                    〒{meta.postalCode}
                    <br />
                  </>
                )}
                {meta.address}
                {meta.bldg && (
                  <>
                    <br />
                    {meta.bldg}
                  </>
                )}
              </span>
            </div>
          </div>
        </div>

        <form
          action={`mailto:${meta.email}`}
          method="post"
          encType="text/plain"
          className="grid gap-4 rounded-lg bg-white p-6 shadow-md"
        >
          <div className="grid gap-2">
            <label
              htmlFor="contact-name"
              className="text-sm font-medium text-gray-700"
            >
            お名前
            </label>
            <input
              id="contact-name"
              name="name"
              required
              autoComplete="name"
              className="rounded-md border border-gray-300 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              placeholder="山田 太郎"
            />
          </div>

          <div className="grid gap-2">
            <label
              htmlFor="contact-email"
              className="text-sm font-medium text-gray-700"
            >
            メールアドレス
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="rounded-md border border-gray-300 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              placeholder="you@example.com"
            />
          </div>

          <div className="grid gap-2">
            <label
              htmlFor="contact-message"
              className="text-sm font-medium text-gray-700"
            >
            お問い合わせ内容
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              className="resize-y rounded-md border border-gray-300 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              placeholder="ご質問やご相談内容をご記入ください"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-2 rounded-md bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            {submitLabel}
          </button>
        </form>
      </div>
    </div>
  );
}
