import Button from 'components/atoms/Button'
import ButtonLink from 'components/atoms/Button/ButtonLink'
import Text from 'components/atoms/Text'

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  bottomSquareSize?: 'small' | 'big'
}

const ProjectCard = ({
  title,
  description,
  imageSrc,
  bottomSquareSize = 'small',
}: ProjectCardProps) => {
  return (
    <div className="w-full">
      <div className="w-full overflow-hidden rounded-xl bg-gray-100">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="flex flex-col place-items-center text-center mt-10">
        <div className="mb-2.5">
          <Text value={title} textStyle="ProjectTitle" />
        </div>
        <div className="mb-9">
          <Text value={description} textStyle="ProjectDescription" />
        </div>
        <div>
          {/* <ButtonLink
            value="Detail"
            color="white"
            radius="pill"
            style="outline"
            href="/project/detail"
          /> */}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
