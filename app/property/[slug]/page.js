import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Related from "./related-products";
import Image from "next/image";
import LeaveReply from "./leavereply";
import "./property.css";
import imglogo from "../../../public/images/logo/Door-Logo-1-768x768.png";
import Lightbox from "./Lightbox";

export default async function PropertyDetail({ params }) {
  const { slug } = params;

  /* MAIN PROPERTY API */
  const apiURL = `https://techzenondev.com/apnatai/api/property/${slug}`;
  const res = await fetch(apiURL, { cache: "no-store" });
  const json = await res.json();

  if (!json.status || !json.data) {
    return (
      <div style={{ padding: 40 }}>
        <h1 style={{ color: "red", fontSize: 26 }}>Property Not Found</h1>
        <p>Slug is invalid.</p>
      </div>
    );
  }

  const data = json.data;
  const bannerBg = `https://techzenondev.com/apnatai/storage/app/public/${data.main_image}`;
  const bannerTitle = slug.replace(/-/g, " ");

  /* SLUG LAST DIGIT */
  const lastDigit = slug?.slice(-1);

  /* RELATED API */
  const relatedURL = `https://techzenondev.com/apnatai/api/properties/slug/${lastDigit}/related`;

  const relatedRes = await fetch(relatedURL, { cache: "no-store" });
  const relatedJson = await relatedRes.json();
  const related = relatedJson?.data || [];

  return (
    <>
      <Header />

      {/* BANNER */}
      <div
        style={{
          width: "100%",
          height: "340px",
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
          }}
        ></div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            color: "white",
            padding: "0 20px",
          }}
        >
          <h1
            style={{
              fontSize: "34px",
              fontWeight: "600",
              marginBottom: "10px",
              textTransform: "capitalize",
            }}
          >
            {bannerTitle}
          </h1>

          <div
            style={{
              background: "#fff",
              padding: "15px 25px",
              borderRadius: "25px",
              width: "fit-content",
              margin: "auto",
              marginBottom: "25px",
            }}
          >
            <p
              style={{
                color: "#00e2ee",
                fontWeight: 600,
                fontSize: "18px",
                margin: 0,
              }}
            >
              {data?.status_type?.name}
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "14px",
                marginTop: "5px",
                color: "#444",
              }}
            >
              From ฿{Number(data?.min_price || 0).toLocaleString("en-US")} Per Month
            </p>
          </div>

          <a
            style={{
              background: "#ff5722",
              color: "#fff",
              padding: "10px 25px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
            href="#contactdealer"
          >
            Get a Consultant
          </a>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ padding: "40px 20px", maxWidth: 1200, margin: "auto" }} className="rh_content">

        <h2 style={{ fontSize: "26px", fontWeight: 600, marginBottom: "15px" }}>
          {data.title}
        </h2>

        {/* Main Image */}
        <img
          src={`https://techzenondev.com/apnatai/storage/app/public/${data.main_image}`}
          alt={data.title}
          style={{
            width: "100%",
            borderRadius: 12,
            maxHeight: 420,
            objectFit: "cover",
          }}
        />

        {/* BASIC INFO */}
        <div
          style={{
            marginTop: 25,
            padding: "20px",
            borderRadius: 10,
            background: "#fafafa",
            lineHeight: 1.7,
            fontSize: 16,
          }}
        >
          <p><b>Property ID:</b> {data.property_id}</p>
          <p><b>Location:</b> {data.location?.name}</p>
          <p><b>Type:</b> {data.type?.name}</p>
          <p><b>Status:</b> {data.status_type?.name}</p>
          <p><b>Minimum Price:</b> ฿{Number(data.min_price).toLocaleString("en-US")}</p>
        </div>

        {/* DESCRIPTION */}
        {data.description && (
          <>
            <h3 style={{ marginTop: 35, fontSize: 22, fontWeight: 600 }}>Description</h3>
            <p
              style={{ marginTop: 10, fontSize: 16, lineHeight: 1.7, color: "#444" }}
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          </>
        )}

        {/* GALLERY */}
        <h3 style={{ marginTop: 35, fontSize: 22, fontWeight: 600 }}>Gallery</h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 15,
            marginTop: 15,
          }}
        >
          {JSON.parse(data.gallery_images || "[]").map((img, index) => {
            const src = `https://techzenondev.com/apnatai/storage/app/public/${img}`;
            return <Lightbox key={index} src={src} />;
          })}
        </div>

        {/* FEATURES */}
        <h3 style={{ marginTop: 35, fontSize: 22, fontWeight: 600 }}>Features</h3>

        <ul style={{ marginTop: 10, fontSize: 16, paddingLeft: 18 }}>
          {JSON.parse(data.features || "[]").map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        {/* FLOOR PLAN */}
        {data.floor_plan_image && (
          <>
            <h3 style={{ marginTop: 35, fontSize: 22, fontWeight: 600 }}>Floor Plan</h3>
            <img
              src={`https://techzenondev.com/apnatai/storage/app/public/${data.floor_plan_image}`}
              style={{ width: "100%", marginTop: 10, borderRadius: 10 }}
            />
          </>
        )}

        {/* VIDEO */}
        {(data.video_url || data.video_file) && (
          <>
            <h3 style={{ marginTop: 35, fontSize: 22, fontWeight: 600 }}>Property Video</h3>

            {data.video_url && (
              <a
                href={data.video_url}
                target="_blank"
                style={{ display: "inline-block", marginTop: 10, color: "#007bff" }}
              >
                Watch Video URL
              </a>
            )}

            {data.video_file && (
              <video
                controls
                style={{ marginTop: 15, width: "100%", borderRadius: 10 }}
              >
                <source src={`https://techzenondev.com/apnatai/storage/app/public/${data.video_file}`} />
              </video>
            )}
          </>
        )}

        {/* MAP (EMBED WITHOUT API KEY) */}
        {data.map_link && (
          <>
            <h3 style={{ marginTop: 35, fontSize: 22, fontWeight: 600 }}>Map Location</h3>

            <div style={{ marginTop: 15 }}>
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  data.map_link
                )}&output=embed`}
                style={{
                  width: "100%",
                  height: "400px",
                  border: 0,
                  borderRadius: "10px"
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </>
        )}

        {/* AGENT */}
        <h3 style={{ marginTop: 40, fontSize: 22, fontWeight: 600 }}>Agent Details</h3>

        <div style={{ display: "flex", gap: 20, marginTop: 10, alignItems: "center" }}>
          <Image src={imglogo} alt="imglogo" width="100" height="100" />
          <div>
            <p style={{ fontSize: 18, margin: 0, fontWeight: 600 }}>{data.agent?.title}</p>
            <p style={{ marginTop: 5 }}>{data.agent?.short_description}</p>
          </div>
        </div>

        {/* RELATED PROPERTIES */}
        {related.length > 0 && (
          <>
            <h3
              style={{
                marginTop: 50,
                fontSize: 24,
                fontWeight: 600,
                borderLeft: "5px solid #00e2ee",
                paddingLeft: 10,
              }}
            >
              Related Properties
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                gap: 20,
                marginTop: 20,
              }}
            >
              {related.map((item) => (
                <div
                  key={item.id}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: 10,
                    overflow: "hidden",
                    background: "#fff",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={`https://techzenondev.com/apnatai/storage/app/public/${item.main_image}`}
                    style={{ width: "100%", height: 170, objectFit: "cover" }}
                  />

                  <div style={{ padding: 15 }}>
                    <h4 style={{ fontSize: 18, marginBottom: 8, fontWeight: 600 }}>{item.title}</h4>

                    <p style={{ margin: 0, color: "#555" }}>
                      ฿ {Number(item.min_price).toLocaleString("en-US")}
                    </p>

                    <a
                      href={`/property/${item.slug}`}
                      style={{
                        display: "inline-block",
                        marginTop: 10,
                        background: "#00e2ee",
                        padding: "8px 15px",
                        borderRadius: 6,
                        color: "#fff",
                        fontSize: 14,
                        textDecoration: "none",
                      }}
                    >
                      View Details
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <Related />
      <LeaveReply />

      <Footer />
    </>
  );
}
