import Section from "@models/section";
import Task from "@models/task";


export const createTask = async (req: any, res: any) => {
  const { sectionId } = req.body
  try {
    const section = await Section.findById(sectionId)
    const tasksCount = await Task.find({ section: sectionId }).count()
    const task = await Task.create({
      section: sectionId,
      position: tasksCount > 0 ? tasksCount : 0
    })
    task._doc.section = section
    res.status(201).json(task)
  } catch (err) {
    res.status(500).json(err)
  }
}

export const updateTask = async (req: any, res: any) => {
  const { taskId } = req.params
  try {
    const task = await Task.findByIdAndUpdate(
      taskId,
      { $set: req.body }
    )
    res.status(200).json(task)
  } catch (err) {
    res.status(500).json(err)
  }
}

export const deleteTask = async (req: any, res: any) => {
  const { taskId } = req.params
  try {
    const currentTask = await Task.findById(taskId)
    await Task.deleteOne({ _id: taskId })
    const tasks = await Task.find({ section: currentTask.section }).sort('postition')
    for (const key in tasks) {
      await Task.findByIdAndUpdate(
        tasks[key].id,
        { $set: { position: key } }
      )
    }
    res.status(200).json('deleted')
  } catch (err) {
    res.status(500).json(err)
  }
}

export const updatePosition = async (req: any, res: any) => {
  const {
    resourceList,
    destinationList,
    resourceSectionId,
    destinationSectionId
  } = req.body
  const resourceListReverse = resourceList.reverse()
  const destinationListReverse = destinationList.reverse()
  try {
    if (resourceSectionId !== destinationSectionId) {
      for (const key in resourceListReverse) {
        await Task.findByIdAndUpdate(
          resourceListReverse[key].id,
          {
            $set: {
              section: resourceSectionId,
              position: key
            }
          }
        )
      }
    }
    for (const key in destinationListReverse) {
      await Task.findByIdAndUpdate(
        destinationListReverse[key].id,
        {
          $set: {
            section: destinationSectionId,
            position: key
          }
        }
      )
    }
    res.status(200).json('updated')
  } catch (err) {
    res.status(500).json(err)
  }
}