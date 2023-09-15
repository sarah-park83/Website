/* eslint-disable jsx-a11y/alt-text */
import '../styles/photogallery.css'

export default function Photogallery() {
  return (
    <div className="photo_container">
      <h4 className="photo_title">대한생활체육회는 지금...</h4>
      <div className="photo_content_container">
        <h5 className="photo_subtitle">포토갤러리</h5>
        <a href="notice/photo/1/">
          <div className="photo_button">더보기</div>
        </a>
        <ul className="photo_list">
          <li className="photo_image_table">
            <div className="photo_image_container">
              <img
                className="photo_video__x0z8l"
                src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/images%2FWIGPa62FhWRGCImTu4HV0FeJ1A83%2FKakaoTalk_20230901_224609162.jpg?alt=media&amp;token=231d60f1-d2e3-422c-b204-d5a883816387"
              />
            </div>
            <a href="/article/video/1/df4j0UNiJQ23iPsyqQXI">
              <div className="photo_text_container">
                <div className="photo_image_title">
                  캐나다한인대한생활체육회 이종학회장 임명장 수여식
                </div>
                <div className="photo_image_createdAt">2023.09.02</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
