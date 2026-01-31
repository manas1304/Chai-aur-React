import emojipedia from '../emojipedia'

export default function Entry(properties){
    return (
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
                {properties.emoji}
            </span>
            <span>{properties.name}</span>
          </dt>
          <dd>
            {properties.meaning}
          </dd>
        </div>
    )
}