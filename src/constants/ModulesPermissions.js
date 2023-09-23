import { ACTIVATE, CREATE, UPDATE, DEACTIVATE, VIEW, DELETE, UNDELETE, CLOSE, VALIDATE, REJECT, INVALIDATE, ASSIGN  } from "./Permissions"


export const USER = {
  module: "profile",
  permissions: {
    [VIEW]: "view_profile",
    [CREATE]: "add_profile",
    [UPDATE]: "change_profile",
    [ACTIVATE]: "activate_profile",
    [DEACTIVATE]: "delete_profile",
    [DELETE]: "soft_delete_profile",
    [UNDELETE]: "undelete_profile",
  },
}

export const USER_GROUP = {
  module: "group",
  permissions: {
    [VIEW]: "view_group",
    [CREATE]: "add_group",
    [UPDATE]: "change_group",
    [DELETE]: "delete_group"
  }
}

export const FOLDER_GROUP = {
  module: "folder_group",
  permissions: {
    [VIEW]: "view_folder_group",
    [CREATE]: "add_folder_group",
    [UPDATE]: "change_folder_group",
    [DELETE]: "delete_folder_group"
  }
}

export const FOLDER = {
  module: "folder",
  permissions: {
    [VIEW]: "view_folder",
    [CREATE]: "add_folder",
    [UPDATE]: "change_folder",
    [DELETE]: "delete_folder"
  }
}

export const EVENT = {
  module: "event",
  permissions: {
    [VIEW]: "view_event",
    [CREATE]: "add_event",
    [UPDATE]: "change_event",
    [DELETE]: "delete_event",
    [CLOSE]: "close_event",
  }
}

export const SKILLS_EVALUATION = {
  module: "level",
  permissions: {
    [VIEW]: "view_level",
    [CREATE]: "add_level",
    [UPDATE]: "change_level",
    [DELETE]: "delete_level",
    [CLOSE]: "close_level",
  }
}

export const FOLDER_DOCUMENT = {
  module: "folder_document",
  permissions: {
    [VIEW]: "view_folder_document",
    [CREATE]: "add_folder_document",
    [UPDATE]: "change_folder_document",
    [DELETE]: "delete_folder_document"
  }
}

export const FAMILY_MEMBER = {
  module: "family_member",
  permissions: {
    [VIEW]: "view_family_member",
    [CREATE]: "add_family_member",
    [UPDATE]: "change_family_member",
    [DELETE]: "delete_family_member"
  }
}

export const SERVICE = {
  module: "service",
  permissions: {
    [VIEW]: "view_service",
    [CREATE]: "add_service",
    [UPDATE]: "change_service",
    [ACTIVATE]: "activate_service",
    [DEACTIVATE]: "delete_service",
  },
}

export const ASSOCIATE_SERVICE = {
  module: "associate_service",
  permissions: {
    [VIEW]: "view_associate_service",
    [CREATE]: "add_associate_service",
    [UPDATE]: "change_associate_service",
    [ACTIVATE]: "activate_associate_service",
    [DEACTIVATE]: "delete_associate_service",
  },
}

export const PARTNERSHIP = {
  module: "partnership",
  permissions: {
    [VIEW]: "view_partnership",
    [CREATE]: "add_partnership",
    [UPDATE]: "change_partnership",
    [ACTIVATE]: "activate_partnership",
    [DEACTIVATE]: "delete_partnership",
  },
}

export const CANDIDATE = {
  module: "candidate",
  permissions: {
    [VIEW]: "view_candidate",
    [CREATE]: "add_candidate",
    [UPDATE]: "change_candidate",
    [ACTIVATE]: "activate_candidate",
    [DEACTIVATE]: "delete_candidate",
  },
}

export const JOB = {
  module: "job",
  permissions: {
    [VIEW]: "view_job",
    [CREATE]: "add_job",
    [UPDATE]: "change_job",
    [ACTIVATE]: "activate_job",
    [DEACTIVATE]: "delete_job",
    [VALIDATE]: "validate_job",
    [REJECT]: "reject_job",
  },
}

export const LIST = {
  module: "list",
  permissions: {
    [VIEW]: "view_list",
    [CREATE]: "add_list",
    [UPDATE]: "change_list",
    [ACTIVATE]: "activate_list",
    [DEACTIVATE]: "delete_list",
  },
};

export const SCHOOL = {
  module: "school",
  permissions: {
    [VIEW]: "view_school",
    [CREATE]: "add_school",
    [UPDATE]: "change_school",
    [ACTIVATE]: "activate_school",
    [DEACTIVATE]: "delete_school",
  },
};

export const OFFER = {
  module: "offer",
  permissions: {
    [VIEW]: "view_offer",
    [CREATE]: "add_offer",
    [UPDATE]: "change_offer",
    [ACTIVATE]: "activate_offer",
    [DEACTIVATE]: "delete_offer",
  },
}

export const EVALUATION_RUBRIC = {
  module: "evaluation_rubric",
  permissions: {
    [VIEW]: "view_evaluationrubric",
    [CREATE]: "add_evaluationrubric",
    [UPDATE]: "change_evaluationrubric",
    [ACTIVATE]: "activate_evaluationrubric",
    [DEACTIVATE]: "delete_evaluationrubric",
  },
}

export const ASSESSMENT_LEVEL = {
  module: "assessment_level",
  permissions: {
    [VIEW]: "view_assessmentlevel",
    [CREATE]: "add_assessmentlevel",
    [UPDATE]: "change_assessmentlevel",
    [ACTIVATE]: "activate_assessmentlevel",
    [DEACTIVATE]: "delete_assessmentlevel",
  },
}

export const KNOWLEDGE_SKILL = {
  module: "knowledge_skill",
  permissions: {
    [VIEW]: "view_knowledgeskill",
    [CREATE]: "add_knowledgeskill",
    [UPDATE]: "change_knowledgeskill",
    [ACTIVATE]: "activate_knowledgeskill",
    [DEACTIVATE]: "delete_knowledgeskill",
  },
}

export const APTITUDE_SKILL = {
  module: "aptitude_skill",
  permissions: {
    [VIEW]: "view_aptitudeskill",
    [CREATE]: "add_aptitudeskill",
    [UPDATE]: "change_aptitudeskill",
    [ACTIVATE]: "activate_aptitudeskill",
    [DEACTIVATE]: "delete_aptitudeskill",
  },
}

export const SKILL = {
  module: "skill",
  permissions: {
    [VIEW]: "view_kill",
    [CREATE]: "add_skill",
    [UPDATE]: "change_skill",
    [ACTIVATE]: "activate_skill",
    [DEACTIVATE]: "delete_skill",
  },
}


export const ASSESSMENT_TOOL = {
  module: "assessment_tool",
  permissions: {
    [VIEW]: "view_assessment_tool",
    [CREATE]: "add_assessment_tool",
    [UPDATE]: "change_assessment_tool",
    [ACTIVATE]: "activate_assessment_tool",
    [DEACTIVATE]: "delete_assessment_tool",
  },
}
export const ORIENTATION = {
  module: "orientation",
  permissions: {
    [VIEW]: "view_orientation",
    [CREATE]: "add_orientation",
    [UPDATE]: "change_orientation",
    [ACTIVATE]: "activate_orientation",
    [DEACTIVATE]: "delete_orientation",
  },

}


export const LEGAL_AGENCY = {
  module:"legal_agency",
  permissions:{
    [VIEW]:"view_legalagency",
    [CREATE]:"add_legalagency",
    [UPDATE]:"change_legalagency",
    [ACTIVATE]:"activate_legalagency",
    [DEACTIVATE]:"delete_legalagency",
  },
}

export const BUSINESS_UNIT = {
  module:"business_unit",
  permissions:{
    [CREATE]:"add_businessunit",
    [UPDATE]:"change_businessunit",
    [ACTIVATE]:"activate_businessunit",
    [DEACTIVATE]:"soft_delete_businessunit",
	[DELETE]:"delete_businessunit",
    [VIEW]:"view_businessunit",
    [ASSIGN]:"assign_manager"
  },
}

export const SHEET = {
  module:"sheet",
  permissions:{
    [CREATE]:"add_sheet",
    [UPDATE]:"change_sheet",
    [DEACTIVATE]:"delete_sheet",
    [VIEW]:"view_sheet",
    [VALIDATE]:"validate_sheet",
    [INVALIDATE]:"invalidate_sheet"
  },
}

export const ACTIVITY_TYPE = {
  module:"activity-type",
  permissions:{
    [CREATE]:"add_activitytype",
    [UPDATE]:"change_activitytype",
    [DEACTIVATE]:"delete_activitytype",
    [VIEW]:"view_activitytype",
	[DELETE]:"delete_activitytype"
  }
}

export const RESOURCE_STATE = {
    module:"resource-state",
    permissions:{
    [CREATE]:"add_resourcestate",
    [UPDATE]:"change_resourcestate",
    [DEACTIVATE]:"delete_resourcestate",
    [VIEW]:"view_resourcestate",
    }
}

export const ACTIVITY = {
    module:"activity",
    permissions: {
	[CREATE]:"add_activity",
	[UPDATE]:"change_activity",
	[DEACTIVATE]:"delete_activity",
	[VIEW]:"view_activity",
	[DELETE]:"delete_activity"
    }
}
