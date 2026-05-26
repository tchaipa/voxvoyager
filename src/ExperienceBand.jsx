import "./ExperienceBand.css";

function ExperienceBand() {
  return (
    <div class="experience-band">
      <div class="exp-item">
        <div class="exp-icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <div class="exp-title">All-Inclusive Luxury</div>
        <div class="exp-desc">
          Private guides, five-star lodges, and every detail attended to from
          departure to return.
        </div>
      </div>
      <div class="exp-item">
        <div class="exp-icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4l3 3" />
          </svg>
        </div>
        <div class="exp-title">Small-Group Intimate</div>
        <div class="exp-desc">
          Maximum 10 guests per journey — ensuring an exclusive, unhurried
          experience in the wild.
        </div>
      </div>
      <div class="exp-item">
        <div class="exp-icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </div>
        <div class="exp-title">Conservation First</div>
        <div class="exp-desc">
          Certified responsible travel. A portion of every booking funds
          Zimbabwe's wildlife protection.
        </div>
      </div>
      <div class="exp-item">
        <div class="exp-icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
        </div>
        <div class="exp-title">Curated by Locals</div>
        <div class="exp-desc">
          Born and raised Zimbabweans lead every journey — authentic knowledge
          no guidebook can offer.
        </div>
      </div>
    </div>
  );
}

export default ExperienceBand;
