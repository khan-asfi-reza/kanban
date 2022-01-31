import Section from "@models/section";
import Task from "@models/task";


export const createSection = async (req: any, res:any) => {
  const { boardId } = req.params
  try {
    const section = await Section.create({ board: boardId })
    section._doc.tasks = []
    res.status(201).json(section)
  } catch (err) {
    res.status(500).josn(err)
  }
}

export const updateSection = async (req: any, res:any) => {
  const { sectionId } = req.params
  try {
    const section = await Section.findByIdAndUpdate(
      sectionId,
      { $set: req.body }
    )
    section._doc.tasks = []
    res.status(200).json(section)
  } catch (err) {
    res.status(500).josn(err)
  }
}

export const deleteTask = async (req: any, res:any) => {
  const { sectionId } = req.params
  try {
    await Task.deleteMany({ section: sectionId })
    await Section.deleteOne({ _id: sectionId })
    res.status(200).json('deleted')
  } catch (err) {
    res.status(500).josn(err)
  }
}