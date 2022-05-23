import "./Featured.css"

export default function Featured() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/square250/685406.webp?k=fb02ffb273110d269bc5603a6c662f36fc5ec76b877f68d5de90c0ffbdd3f475&o=" alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Nairobi</h1>
                <h2>234 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/square250/957274.webp?k=472afbfc72657120f3c6907f8e48054576c9424be7791a3b58e2cd6026927323&o=" alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Watamu</h1>
                <h2>34 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/square250/68500.webp?k=628936d13acfbd4d32481bb2a4bcd7ab09583c3f8b0ee866422eea6b2ce5a855&o=" alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Naivasha</h1>
                <h2>101 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/square250/685399.webp?k=4410d3272c0ccbc1dd11f53d70243ad7f59ecd89f23a71eb7a93b89382a288da&o=" alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Mombasa</h1>
                <h2>201 properties</h2>
            </div>
        </div>
    </div>
  )
}
