/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	AbortQueuedMigrationsInput:{

	},
	AbortRepositoryMigrationInput:{

	},
	AcceptEnterpriseAdministratorInvitationInput:{

	},
	AcceptEnterpriseMemberInvitationInput:{

	},
	AcceptTopicSuggestionInput:{

	},
	Actor:{
		avatarUrl:{

		}
	},
	ActorType: "enum" as const,
	AddAssigneesToAssignableInput:{

	},
	AddCommentInput:{

	},
	AddDiscussionCommentInput:{

	},
	AddDiscussionPollVoteInput:{

	},
	AddEnterpriseOrganizationMemberInput:{
		role:"OrganizationMemberRole"
	},
	AddEnterpriseSupportEntitlementInput:{

	},
	AddLabelsToLabelableInput:{

	},
	AddProjectCardInput:{

	},
	AddProjectColumnInput:{

	},
	AddProjectV2DraftIssueInput:{

	},
	AddProjectV2ItemByIdInput:{

	},
	AddPullRequestReviewCommentInput:{
		commitOID:"GitObjectID"
	},
	AddPullRequestReviewInput:{
		comments:"DraftPullRequestReviewComment",
		commitOID:"GitObjectID",
		event:"PullRequestReviewEvent",
		threads:"DraftPullRequestReviewThread"
	},
	AddPullRequestReviewThreadInput:{
		side:"DiffSide",
		startSide:"DiffSide",
		subjectType:"PullRequestReviewThreadSubjectType"
	},
	AddPullRequestReviewThreadReplyInput:{

	},
	AddReactionInput:{
		content:"ReactionContent"
	},
	AddStarInput:{

	},
	AddSubIssueInput:{

	},
	AddUpvoteInput:{

	},
	AddVerifiableDomainInput:{
		domain:"URI"
	},
	App:{
		ipAllowListEntries:{
			orderBy:"IpAllowListEntryOrder"
		},
		logoUrl:{

		}
	},
	ApproveDeploymentsInput:{

	},
	ApproveVerifiableDomainInput:{

	},
	ArchiveProjectV2ItemInput:{

	},
	ArchiveRepositoryInput:{

	},
	Assignable:{
		assignees:{

		}
	},
	AuditLogOrder:{
		direction:"OrderDirection",
		field:"AuditLogOrderField"
	},
	AuditLogOrderField: "enum" as const,
	Base64String: `scalar.Base64String` as const,
	BigInt: `scalar.BigInt` as const,
	Bot:{
		avatarUrl:{

		}
	},
	BranchNamePatternParametersInput:{

	},
	BranchProtectionRule:{
		branchProtectionRuleConflicts:{

		},
		bypassForcePushAllowances:{

		},
		bypassPullRequestAllowances:{

		},
		matchingRefs:{

		},
		pushAllowances:{

		},
		reviewDismissalAllowances:{

		}
	},
	BulkSponsorship:{

	},
	CancelEnterpriseAdminInvitationInput:{

	},
	CancelEnterpriseMemberInvitationInput:{

	},
	CancelSponsorshipInput:{

	},
	ChangeUserStatusInput:{
		expiresAt:"DateTime"
	},
	CheckAnnotationData:{
		annotationLevel:"CheckAnnotationLevel",
		location:"CheckAnnotationRange"
	},
	CheckAnnotationLevel: "enum" as const,
	CheckAnnotationRange:{

	},
	CheckConclusionState: "enum" as const,
	CheckRun:{
		annotations:{

		},
		isRequired:{

		},
		steps:{

		}
	},
	CheckRunAction:{

	},
	CheckRunFilter:{
		checkType:"CheckRunType",
		conclusions:"CheckConclusionState",
		status:"CheckStatusState",
		statuses:"CheckStatusState"
	},
	CheckRunOutput:{
		annotations:"CheckAnnotationData",
		images:"CheckRunOutputImage"
	},
	CheckRunOutputImage:{
		imageUrl:"URI"
	},
	CheckRunState: "enum" as const,
	CheckRunType: "enum" as const,
	CheckStatusState: "enum" as const,
	CheckSuite:{
		checkRuns:{
			filterBy:"CheckRunFilter"
		},
		matchingPullRequests:{
			orderBy:"IssueOrder",
			states:"PullRequestState"
		}
	},
	CheckSuiteAutoTriggerPreference:{

	},
	CheckSuiteFilter:{

	},
	ClearLabelsFromLabelableInput:{

	},
	ClearProjectV2ItemFieldValueInput:{

	},
	CloneProjectInput:{

	},
	CloneTemplateRepositoryInput:{
		visibility:"RepositoryVisibility"
	},
	CloseDiscussionInput:{
		reason:"DiscussionCloseReason"
	},
	CloseIssueInput:{
		stateReason:"IssueClosedStateReason"
	},
	ClosePullRequestInput:{

	},
	CodeScanningParametersInput:{
		codeScanningTools:"CodeScanningToolInput"
	},
	CodeScanningToolInput:{

	},
	CollaboratorAffiliation: "enum" as const,
	Comment:{
		userContentEdits:{

		}
	},
	CommentAuthorAssociation: "enum" as const,
	CommentCannotUpdateReason: "enum" as const,
	Commit:{
		associatedPullRequests:{
			orderBy:"PullRequestOrder"
		},
		authors:{

		},
		blame:{

		},
		checkSuites:{
			filterBy:"CheckSuiteFilter"
		},
		comments:{

		},
		deployments:{
			orderBy:"DeploymentOrder"
		},
		file:{

		},
		history:{
			author:"CommitAuthor",
			since:"GitTimestamp",
			until:"GitTimestamp"
		},
		parents:{

		},
		submodules:{

		}
	},
	CommitAuthor:{

	},
	CommitAuthorEmailPatternParametersInput:{

	},
	CommitComment:{
		reactions:{
			content:"ReactionContent",
			orderBy:"ReactionOrder"
		},
		userContentEdits:{

		}
	},
	CommitCommentThread:{
		comments:{

		}
	},
	CommitContributionOrder:{
		direction:"OrderDirection",
		field:"CommitContributionOrderField"
	},
	CommitContributionOrderField: "enum" as const,
	CommitContributionsByRepository:{
		contributions:{
			orderBy:"CommitContributionOrder"
		}
	},
	CommitMessage:{

	},
	CommitMessagePatternParametersInput:{

	},
	CommittableBranch:{

	},
	CommitterEmailPatternParametersInput:{

	},
	Comparison:{
		commits:{

		}
	},
	ComparisonStatus: "enum" as const,
	ContributionLevel: "enum" as const,
	ContributionOrder:{
		direction:"OrderDirection"
	},
	ContributionsCollection:{
		commitContributionsByRepository:{

		},
		issueContributions:{
			orderBy:"ContributionOrder"
		},
		issueContributionsByRepository:{

		},
		pullRequestContributions:{
			orderBy:"ContributionOrder"
		},
		pullRequestContributionsByRepository:{

		},
		pullRequestReviewContributions:{
			orderBy:"ContributionOrder"
		},
		pullRequestReviewContributionsByRepository:{

		},
		repositoryContributions:{
			orderBy:"ContributionOrder"
		},
		totalIssueContributions:{

		},
		totalPullRequestContributions:{

		},
		totalRepositoriesWithContributedIssues:{

		},
		totalRepositoriesWithContributedPullRequests:{

		},
		totalRepositoryContributions:{

		}
	},
	ConvertProjectCardNoteToIssueInput:{

	},
	ConvertProjectV2DraftIssueItemToIssueInput:{

	},
	ConvertPullRequestToDraftInput:{

	},
	CopyProjectV2Input:{

	},
	CreateAttributionInvitationInput:{

	},
	CreateBranchProtectionRuleInput:{
		requiredStatusChecks:"RequiredStatusCheckInput"
	},
	CreateCheckRunInput:{
		actions:"CheckRunAction",
		completedAt:"DateTime",
		conclusion:"CheckConclusionState",
		detailsUrl:"URI",
		headSha:"GitObjectID",
		output:"CheckRunOutput",
		startedAt:"DateTime",
		status:"RequestableCheckStatusState"
	},
	CreateCheckSuiteInput:{
		headSha:"GitObjectID"
	},
	CreateCommitOnBranchInput:{
		branch:"CommittableBranch",
		expectedHeadOid:"GitObjectID",
		fileChanges:"FileChanges",
		message:"CommitMessage"
	},
	CreateDeploymentInput:{

	},
	CreateDeploymentStatusInput:{
		state:"DeploymentStatusState"
	},
	CreateDiscussionInput:{

	},
	CreateEnterpriseOrganizationInput:{

	},
	CreateEnvironmentInput:{

	},
	CreateIpAllowListEntryInput:{

	},
	CreateIssueInput:{

	},
	CreateLabelInput:{

	},
	CreateLinkedBranchInput:{
		oid:"GitObjectID"
	},
	CreateMigrationSourceInput:{
		type:"MigrationSourceType"
	},
	CreateProjectInput:{
		template:"ProjectTemplate"
	},
	CreateProjectV2FieldInput:{
		dataType:"ProjectV2CustomFieldType",
		singleSelectOptions:"ProjectV2SingleSelectFieldOptionInput"
	},
	CreateProjectV2Input:{

	},
	CreateProjectV2StatusUpdateInput:{
		startDate:"Date",
		status:"ProjectV2StatusUpdateStatus",
		targetDate:"Date"
	},
	CreatePullRequestInput:{

	},
	CreateRefInput:{
		oid:"GitObjectID"
	},
	CreateRepositoryInput:{
		homepageUrl:"URI",
		visibility:"RepositoryVisibility"
	},
	CreateRepositoryRulesetInput:{
		bypassActors:"RepositoryRulesetBypassActorInput",
		conditions:"RepositoryRuleConditionsInput",
		enforcement:"RuleEnforcement",
		rules:"RepositoryRuleInput",
		target:"RepositoryRulesetTarget"
	},
	CreateSponsorsListingInput:{
		billingCountryOrRegionCode:"SponsorsCountryOrRegionCode",
		residenceCountryOrRegionCode:"SponsorsCountryOrRegionCode"
	},
	CreateSponsorsTierInput:{

	},
	CreateSponsorshipInput:{
		privacyLevel:"SponsorshipPrivacy"
	},
	CreateSponsorshipsInput:{
		privacyLevel:"SponsorshipPrivacy",
		sponsorships:"BulkSponsorship"
	},
	CreateTeamDiscussionCommentInput:{

	},
	CreateTeamDiscussionInput:{

	},
	CreateUserListInput:{

	},
	Date: `scalar.Date` as const,
	DateTime: `scalar.DateTime` as const,
	DeclineTopicSuggestionInput:{
		reason:"TopicSuggestionDeclineReason"
	},
	DefaultRepositoryPermissionField: "enum" as const,
	DeleteBranchProtectionRuleInput:{

	},
	DeleteDeploymentInput:{

	},
	DeleteDiscussionCommentInput:{

	},
	DeleteDiscussionInput:{

	},
	DeleteEnvironmentInput:{

	},
	DeleteIpAllowListEntryInput:{

	},
	DeleteIssueCommentInput:{

	},
	DeleteIssueInput:{

	},
	DeleteLabelInput:{

	},
	DeleteLinkedBranchInput:{

	},
	DeletePackageVersionInput:{

	},
	DeleteProjectCardInput:{

	},
	DeleteProjectColumnInput:{

	},
	DeleteProjectInput:{

	},
	DeleteProjectV2FieldInput:{

	},
	DeleteProjectV2Input:{

	},
	DeleteProjectV2ItemInput:{

	},
	DeleteProjectV2StatusUpdateInput:{

	},
	DeleteProjectV2WorkflowInput:{

	},
	DeletePullRequestReviewCommentInput:{

	},
	DeletePullRequestReviewInput:{

	},
	DeleteRefInput:{

	},
	DeleteRepositoryRulesetInput:{

	},
	DeleteTeamDiscussionCommentInput:{

	},
	DeleteTeamDiscussionInput:{

	},
	DeleteUserListInput:{

	},
	DeleteVerifiableDomainInput:{

	},
	DependencyGraphEcosystem: "enum" as const,
	DependencyGraphManifest:{
		dependencies:{

		}
	},
	Deployment:{
		statuses:{

		}
	},
	DeploymentOrder:{
		direction:"OrderDirection",
		field:"DeploymentOrderField"
	},
	DeploymentOrderField: "enum" as const,
	DeploymentProtectionRule:{
		reviewers:{

		}
	},
	DeploymentProtectionRuleType: "enum" as const,
	DeploymentRequest:{
		reviewers:{

		}
	},
	DeploymentReview:{
		environments:{

		}
	},
	DeploymentReviewState: "enum" as const,
	DeploymentState: "enum" as const,
	DeploymentStatusState: "enum" as const,
	DequeuePullRequestInput:{

	},
	DiffSide: "enum" as const,
	DisablePullRequestAutoMergeInput:{

	},
	Discussion:{
		comments:{

		},
		labels:{
			orderBy:"LabelOrder"
		},
		reactions:{
			content:"ReactionContent",
			orderBy:"ReactionOrder"
		},
		userContentEdits:{

		}
	},
	DiscussionCloseReason: "enum" as const,
	DiscussionComment:{
		reactions:{
			content:"ReactionContent",
			orderBy:"ReactionOrder"
		},
		replies:{

		},
		userContentEdits:{

		}
	},
	DiscussionOrder:{
		direction:"OrderDirection",
		field:"DiscussionOrderField"
	},
	DiscussionOrderField: "enum" as const,
	DiscussionPoll:{
		options:{
			orderBy:"DiscussionPollOptionOrder"
		}
	},
	DiscussionPollOptionOrder:{
		direction:"OrderDirection",
		field:"DiscussionPollOptionOrderField"
	},
	DiscussionPollOptionOrderField: "enum" as const,
	DiscussionState: "enum" as const,
	DiscussionStateReason: "enum" as const,
	DismissPullRequestReviewInput:{

	},
	DismissReason: "enum" as const,
	DismissRepositoryVulnerabilityAlertInput:{
		dismissReason:"DismissReason"
	},
	DraftIssue:{
		assignees:{

		},
		projectV2Items:{

		},
		projectsV2:{

		}
	},
	DraftPullRequestReviewComment:{

	},
	DraftPullRequestReviewThread:{
		side:"DiffSide",
		startSide:"DiffSide"
	},
	EnablePullRequestAutoMergeInput:{
		expectedHeadOid:"GitObjectID",
		mergeMethod:"PullRequestMergeMethod"
	},
	EnqueuePullRequestInput:{
		expectedHeadOid:"GitObjectID"
	},
	Enterprise:{
		avatarUrl:{

		},
		members:{
			deployment:"EnterpriseUserDeployment",
			orderBy:"EnterpriseMemberOrder",
			role:"EnterpriseUserAccountMembershipRole",
			twoFactorMethodSecurity:"TwoFactorCredentialSecurityType"
		},
		organizations:{
			orderBy:"OrganizationOrder",
			viewerOrganizationRole:"RoleInOrganization"
		}
	},
	EnterpriseAdministratorInvitationOrder:{
		direction:"OrderDirection",
		field:"EnterpriseAdministratorInvitationOrderField"
	},
	EnterpriseAdministratorInvitationOrderField: "enum" as const,
	EnterpriseAdministratorRole: "enum" as const,
	EnterpriseAllowPrivateRepositoryForkingPolicyValue: "enum" as const,
	EnterpriseDefaultRepositoryPermissionSettingValue: "enum" as const,
	EnterpriseDisallowedMethodsSettingValue: "enum" as const,
	EnterpriseEnabledDisabledSettingValue: "enum" as const,
	EnterpriseEnabledSettingValue: "enum" as const,
	EnterpriseIdentityProvider:{
		externalIdentities:{

		}
	},
	EnterpriseMemberInvitationOrder:{
		direction:"OrderDirection",
		field:"EnterpriseMemberInvitationOrderField"
	},
	EnterpriseMemberInvitationOrderField: "enum" as const,
	EnterpriseMemberOrder:{
		direction:"OrderDirection",
		field:"EnterpriseMemberOrderField"
	},
	EnterpriseMemberOrderField: "enum" as const,
	EnterpriseMembersCanCreateRepositoriesSettingValue: "enum" as const,
	EnterpriseMembersCanMakePurchasesSettingValue: "enum" as const,
	EnterpriseMembershipType: "enum" as const,
	EnterpriseOrder:{
		direction:"OrderDirection",
		field:"EnterpriseOrderField"
	},
	EnterpriseOrderField: "enum" as const,
	EnterpriseOutsideCollaboratorEdge:{
		repositories:{
			orderBy:"RepositoryOrder"
		}
	},
	EnterpriseOwnerInfo:{
		admins:{
			orderBy:"EnterpriseMemberOrder",
			role:"EnterpriseAdministratorRole",
			twoFactorMethodSecurity:"TwoFactorCredentialSecurityType"
		},
		affiliatedUsersWithTwoFactorDisabled:{

		},
		allowPrivateRepositoryForkingSettingOrganizations:{
			orderBy:"OrganizationOrder"
		},
		defaultRepositoryPermissionSettingOrganizations:{
			orderBy:"OrganizationOrder",
			value:"DefaultRepositoryPermissionField"
		},
		domains:{
			orderBy:"VerifiableDomainOrder"
		},
		enterpriseServerInstallations:{
			orderBy:"EnterpriseServerInstallationOrder"
		},
		failedInvitations:{

		},
		ipAllowListEntries:{
			orderBy:"IpAllowListEntryOrder"
		},
		membersCanChangeRepositoryVisibilitySettingOrganizations:{
			orderBy:"OrganizationOrder"
		},
		membersCanCreateRepositoriesSettingOrganizations:{
			orderBy:"OrganizationOrder",
			value:"OrganizationMembersCanCreateRepositoriesSettingValue"
		},
		membersCanDeleteIssuesSettingOrganizations:{
			orderBy:"OrganizationOrder"
		},
		membersCanDeleteRepositoriesSettingOrganizations:{
			orderBy:"OrganizationOrder"
		},
		membersCanInviteCollaboratorsSettingOrganizations:{
			orderBy:"OrganizationOrder"
		},
		membersCanUpdateProtectedBranchesSettingOrganizations:{
			orderBy:"OrganizationOrder"
		},
		membersCanViewDependencyInsightsSettingOrganizations:{
			orderBy:"OrganizationOrder"
		},
		organizationProjectsSettingOrganizations:{
			orderBy:"OrganizationOrder"
		},
		outsideCollaborators:{
			orderBy:"EnterpriseMemberOrder",
			twoFactorMethodSecurity:"TwoFactorCredentialSecurityType",
			visibility:"RepositoryVisibility"
		},
		pendingAdminInvitations:{
			orderBy:"EnterpriseAdministratorInvitationOrder",
			role:"EnterpriseAdministratorRole"
		},
		pendingCollaboratorInvitations:{
			orderBy:"RepositoryInvitationOrder"
		},
		pendingMemberInvitations:{
			invitationSource:"OrganizationInvitationSource"
		},
		pendingUnaffiliatedMemberInvitations:{
			orderBy:"EnterpriseMemberInvitationOrder"
		},
		repositoryDeployKeySettingOrganizations:{
			orderBy:"OrganizationOrder"
		},
		repositoryProjectsSettingOrganizations:{
			orderBy:"OrganizationOrder"
		},
		samlIdentityProviderSettingOrganizations:{
			orderBy:"OrganizationOrder",
			value:"IdentityProviderConfigurationState"
		},
		supportEntitlements:{
			orderBy:"EnterpriseMemberOrder"
		},
		teamDiscussionsSettingOrganizations:{
			orderBy:"OrganizationOrder"
		},
		twoFactorRequiredSettingOrganizations:{
			orderBy:"OrganizationOrder"
		}
	},
	EnterpriseServerInstallation:{
		userAccounts:{
			orderBy:"EnterpriseServerUserAccountOrder"
		},
		userAccountsUploads:{
			orderBy:"EnterpriseServerUserAccountsUploadOrder"
		}
	},
	EnterpriseServerInstallationOrder:{
		direction:"OrderDirection",
		field:"EnterpriseServerInstallationOrderField"
	},
	EnterpriseServerInstallationOrderField: "enum" as const,
	EnterpriseServerUserAccount:{
		emails:{
			orderBy:"EnterpriseServerUserAccountEmailOrder"
		}
	},
	EnterpriseServerUserAccountEmailOrder:{
		direction:"OrderDirection",
		field:"EnterpriseServerUserAccountEmailOrderField"
	},
	EnterpriseServerUserAccountEmailOrderField: "enum" as const,
	EnterpriseServerUserAccountOrder:{
		direction:"OrderDirection",
		field:"EnterpriseServerUserAccountOrderField"
	},
	EnterpriseServerUserAccountOrderField: "enum" as const,
	EnterpriseServerUserAccountsUploadOrder:{
		direction:"OrderDirection",
		field:"EnterpriseServerUserAccountsUploadOrderField"
	},
	EnterpriseServerUserAccountsUploadOrderField: "enum" as const,
	EnterpriseServerUserAccountsUploadSyncState: "enum" as const,
	EnterpriseUserAccount:{
		avatarUrl:{

		},
		enterpriseInstallations:{
			orderBy:"EnterpriseServerInstallationOrder",
			role:"EnterpriseUserAccountMembershipRole"
		},
		organizations:{
			orderBy:"OrganizationOrder",
			role:"EnterpriseUserAccountMembershipRole"
		}
	},
	EnterpriseUserAccountMembershipRole: "enum" as const,
	EnterpriseUserDeployment: "enum" as const,
	Environment:{
		protectionRules:{

		}
	},
	EnvironmentOrderField: "enum" as const,
	EnvironmentPinnedFilterField: "enum" as const,
	Environments:{
		direction:"OrderDirection",
		field:"EnvironmentOrderField"
	},
	FileAddition:{
		contents:"Base64String"
	},
	FileChanges:{
		additions:"FileAddition",
		deletions:"FileDeletion"
	},
	FileDeletion:{

	},
	FileExtensionRestrictionParametersInput:{

	},
	FilePathRestrictionParametersInput:{

	},
	FileViewedState: "enum" as const,
	FollowOrganizationInput:{

	},
	FollowUserInput:{

	},
	FundingPlatform: "enum" as const,
	Gist:{
		comments:{

		},
		files:{
			oid:"GitObjectID"
		},
		forks:{
			orderBy:"GistOrder"
		},
		stargazers:{
			orderBy:"StarOrder"
		}
	},
	GistComment:{
		userContentEdits:{

		}
	},
	GistFile:{
		text:{

		}
	},
	GistOrder:{
		direction:"OrderDirection",
		field:"GistOrderField"
	},
	GistOrderField: "enum" as const,
	GistPrivacy: "enum" as const,
	GitActor:{
		avatarUrl:{

		}
	},
	GitObjectID: `scalar.GitObjectID` as const,
	GitRefname: `scalar.GitRefname` as const,
	GitSSHRemote: `scalar.GitSSHRemote` as const,
	GitSignatureState: "enum" as const,
	GitTimestamp: `scalar.GitTimestamp` as const,
	GrantEnterpriseOrganizationsMigratorRoleInput:{

	},
	GrantEnterpriseOrganizationsMigratorRolePayload:{
		organizations:{

		}
	},
	GrantMigratorRoleInput:{
		actorType:"ActorType"
	},
	HTML: `scalar.HTML` as const,
	IdentityProviderConfigurationState: "enum" as const,
	ImportProjectInput:{
		columnImports:"ProjectColumnImport"
	},
	InviteEnterpriseAdminInput:{
		role:"EnterpriseAdministratorRole"
	},
	InviteEnterpriseMemberInput:{

	},
	IpAllowListEnabledSettingValue: "enum" as const,
	IpAllowListEntryOrder:{
		direction:"OrderDirection",
		field:"IpAllowListEntryOrderField"
	},
	IpAllowListEntryOrderField: "enum" as const,
	IpAllowListForInstalledAppsEnabledSettingValue: "enum" as const,
	Issue:{
		assignees:{

		},
		closedByPullRequestsReferences:{

		},
		comments:{
			orderBy:"IssueCommentOrder"
		},
		hovercard:{

		},
		labels:{
			orderBy:"LabelOrder"
		},
		linkedBranches:{

		},
		participants:{

		},
		projectCards:{
			archivedStates:"ProjectCardArchivedState"
		},
		projectItems:{

		},
		projectV2:{

		},
		projectsV2:{
			minPermissionLevel:"ProjectV2PermissionLevel",
			orderBy:"ProjectV2Order"
		},
		reactions:{
			content:"ReactionContent",
			orderBy:"ReactionOrder"
		},
		subIssues:{

		},
		timeline:{
			since:"DateTime"
		},
		timelineItems:{
			itemTypes:"IssueTimelineItemsItemType",
			since:"DateTime"
		},
		trackedInIssues:{

		},
		trackedIssues:{

		},
		trackedIssuesCount:{
			states:"TrackedIssueStates"
		},
		userContentEdits:{

		}
	},
	IssueClosedStateReason: "enum" as const,
	IssueComment:{
		reactions:{
			content:"ReactionContent",
			orderBy:"ReactionOrder"
		},
		userContentEdits:{

		}
	},
	IssueCommentOrder:{
		direction:"OrderDirection",
		field:"IssueCommentOrderField"
	},
	IssueCommentOrderField: "enum" as const,
	IssueContributionsByRepository:{
		contributions:{
			orderBy:"ContributionOrder"
		}
	},
	IssueFilters:{
		since:"DateTime",
		states:"IssueState"
	},
	IssueOrder:{
		direction:"OrderDirection",
		field:"IssueOrderField"
	},
	IssueOrderField: "enum" as const,
	IssueState: "enum" as const,
	IssueStateReason: "enum" as const,
	IssueTemplate:{
		assignees:{

		},
		labels:{
			orderBy:"LabelOrder"
		}
	},
	IssueTimelineItemsItemType: "enum" as const,
	Label:{
		issues:{
			filterBy:"IssueFilters",
			orderBy:"IssueOrder",
			states:"IssueState"
		},
		pullRequests:{
			orderBy:"IssueOrder",
			states:"PullRequestState"
		}
	},
	LabelOrder:{
		direction:"OrderDirection",
		field:"LabelOrderField"
	},
	LabelOrderField: "enum" as const,
	Labelable:{
		labels:{
			orderBy:"LabelOrder"
		}
	},
	LanguageOrder:{
		direction:"OrderDirection",
		field:"LanguageOrderField"
	},
	LanguageOrderField: "enum" as const,
	LinkProjectV2ToRepositoryInput:{

	},
	LinkProjectV2ToTeamInput:{

	},
	LinkRepositoryToProjectInput:{

	},
	LockLockableInput:{
		lockReason:"LockReason"
	},
	LockReason: "enum" as const,
	Mannequin:{
		avatarUrl:{

		}
	},
	MannequinOrder:{
		direction:"OrderDirection",
		field:"MannequinOrderField"
	},
	MannequinOrderField: "enum" as const,
	MarkDiscussionCommentAsAnswerInput:{

	},
	MarkFileAsViewedInput:{

	},
	MarkNotificationAsDoneInput:{

	},
	MarkProjectV2AsTemplateInput:{

	},
	MarkPullRequestReadyForReviewInput:{

	},
	MarketplaceListing:{
		logoUrl:{

		}
	},
	MaxFilePathLengthParametersInput:{

	},
	MaxFileSizeParametersInput:{

	},
	MemberStatusable:{
		memberStatuses:{
			orderBy:"UserStatusOrder"
		}
	},
	MergeBranchInput:{

	},
	MergeCommitMessage: "enum" as const,
	MergeCommitTitle: "enum" as const,
	MergePullRequestInput:{
		expectedHeadOid:"GitObjectID",
		mergeMethod:"PullRequestMergeMethod"
	},
	MergeQueue:{
		entries:{

		}
	},
	MergeQueueEntryState: "enum" as const,
	MergeQueueGroupingStrategy: "enum" as const,
	MergeQueueMergeMethod: "enum" as const,
	MergeQueueMergingStrategy: "enum" as const,
	MergeQueueParametersInput:{
		groupingStrategy:"MergeQueueGroupingStrategy",
		mergeMethod:"MergeQueueMergeMethod"
	},
	MergeStateStatus: "enum" as const,
	MergeableState: "enum" as const,
	MigrationSourceType: "enum" as const,
	MigrationState: "enum" as const,
	Milestone:{
		issues:{
			filterBy:"IssueFilters",
			orderBy:"IssueOrder",
			states:"IssueState"
		},
		pullRequests:{
			orderBy:"IssueOrder",
			states:"PullRequestState"
		}
	},
	MilestoneOrder:{
		direction:"OrderDirection",
		field:"MilestoneOrderField"
	},
	MilestoneOrderField: "enum" as const,
	MilestoneState: "enum" as const,
	MinimizeCommentInput:{
		classifier:"ReportedContentClassifiers"
	},
	MoveProjectCardInput:{

	},
	MoveProjectColumnInput:{

	},
	Mutation:{
		abortQueuedMigrations:{
			input:"AbortQueuedMigrationsInput"
		},
		abortRepositoryMigration:{
			input:"AbortRepositoryMigrationInput"
		},
		acceptEnterpriseAdministratorInvitation:{
			input:"AcceptEnterpriseAdministratorInvitationInput"
		},
		acceptEnterpriseMemberInvitation:{
			input:"AcceptEnterpriseMemberInvitationInput"
		},
		acceptTopicSuggestion:{
			input:"AcceptTopicSuggestionInput"
		},
		addAssigneesToAssignable:{
			input:"AddAssigneesToAssignableInput"
		},
		addComment:{
			input:"AddCommentInput"
		},
		addDiscussionComment:{
			input:"AddDiscussionCommentInput"
		},
		addDiscussionPollVote:{
			input:"AddDiscussionPollVoteInput"
		},
		addEnterpriseOrganizationMember:{
			input:"AddEnterpriseOrganizationMemberInput"
		},
		addEnterpriseSupportEntitlement:{
			input:"AddEnterpriseSupportEntitlementInput"
		},
		addLabelsToLabelable:{
			input:"AddLabelsToLabelableInput"
		},
		addProjectCard:{
			input:"AddProjectCardInput"
		},
		addProjectColumn:{
			input:"AddProjectColumnInput"
		},
		addProjectV2DraftIssue:{
			input:"AddProjectV2DraftIssueInput"
		},
		addProjectV2ItemById:{
			input:"AddProjectV2ItemByIdInput"
		},
		addPullRequestReview:{
			input:"AddPullRequestReviewInput"
		},
		addPullRequestReviewComment:{
			input:"AddPullRequestReviewCommentInput"
		},
		addPullRequestReviewThread:{
			input:"AddPullRequestReviewThreadInput"
		},
		addPullRequestReviewThreadReply:{
			input:"AddPullRequestReviewThreadReplyInput"
		},
		addReaction:{
			input:"AddReactionInput"
		},
		addStar:{
			input:"AddStarInput"
		},
		addSubIssue:{
			input:"AddSubIssueInput"
		},
		addUpvote:{
			input:"AddUpvoteInput"
		},
		addVerifiableDomain:{
			input:"AddVerifiableDomainInput"
		},
		approveDeployments:{
			input:"ApproveDeploymentsInput"
		},
		approveVerifiableDomain:{
			input:"ApproveVerifiableDomainInput"
		},
		archiveProjectV2Item:{
			input:"ArchiveProjectV2ItemInput"
		},
		archiveRepository:{
			input:"ArchiveRepositoryInput"
		},
		cancelEnterpriseAdminInvitation:{
			input:"CancelEnterpriseAdminInvitationInput"
		},
		cancelEnterpriseMemberInvitation:{
			input:"CancelEnterpriseMemberInvitationInput"
		},
		cancelSponsorship:{
			input:"CancelSponsorshipInput"
		},
		changeUserStatus:{
			input:"ChangeUserStatusInput"
		},
		clearLabelsFromLabelable:{
			input:"ClearLabelsFromLabelableInput"
		},
		clearProjectV2ItemFieldValue:{
			input:"ClearProjectV2ItemFieldValueInput"
		},
		cloneProject:{
			input:"CloneProjectInput"
		},
		cloneTemplateRepository:{
			input:"CloneTemplateRepositoryInput"
		},
		closeDiscussion:{
			input:"CloseDiscussionInput"
		},
		closeIssue:{
			input:"CloseIssueInput"
		},
		closePullRequest:{
			input:"ClosePullRequestInput"
		},
		convertProjectCardNoteToIssue:{
			input:"ConvertProjectCardNoteToIssueInput"
		},
		convertProjectV2DraftIssueItemToIssue:{
			input:"ConvertProjectV2DraftIssueItemToIssueInput"
		},
		convertPullRequestToDraft:{
			input:"ConvertPullRequestToDraftInput"
		},
		copyProjectV2:{
			input:"CopyProjectV2Input"
		},
		createAttributionInvitation:{
			input:"CreateAttributionInvitationInput"
		},
		createBranchProtectionRule:{
			input:"CreateBranchProtectionRuleInput"
		},
		createCheckRun:{
			input:"CreateCheckRunInput"
		},
		createCheckSuite:{
			input:"CreateCheckSuiteInput"
		},
		createCommitOnBranch:{
			input:"CreateCommitOnBranchInput"
		},
		createDeployment:{
			input:"CreateDeploymentInput"
		},
		createDeploymentStatus:{
			input:"CreateDeploymentStatusInput"
		},
		createDiscussion:{
			input:"CreateDiscussionInput"
		},
		createEnterpriseOrganization:{
			input:"CreateEnterpriseOrganizationInput"
		},
		createEnvironment:{
			input:"CreateEnvironmentInput"
		},
		createIpAllowListEntry:{
			input:"CreateIpAllowListEntryInput"
		},
		createIssue:{
			input:"CreateIssueInput"
		},
		createLabel:{
			input:"CreateLabelInput"
		},
		createLinkedBranch:{
			input:"CreateLinkedBranchInput"
		},
		createMigrationSource:{
			input:"CreateMigrationSourceInput"
		},
		createProject:{
			input:"CreateProjectInput"
		},
		createProjectV2:{
			input:"CreateProjectV2Input"
		},
		createProjectV2Field:{
			input:"CreateProjectV2FieldInput"
		},
		createProjectV2StatusUpdate:{
			input:"CreateProjectV2StatusUpdateInput"
		},
		createPullRequest:{
			input:"CreatePullRequestInput"
		},
		createRef:{
			input:"CreateRefInput"
		},
		createRepository:{
			input:"CreateRepositoryInput"
		},
		createRepositoryRuleset:{
			input:"CreateRepositoryRulesetInput"
		},
		createSponsorsListing:{
			input:"CreateSponsorsListingInput"
		},
		createSponsorsTier:{
			input:"CreateSponsorsTierInput"
		},
		createSponsorship:{
			input:"CreateSponsorshipInput"
		},
		createSponsorships:{
			input:"CreateSponsorshipsInput"
		},
		createTeamDiscussion:{
			input:"CreateTeamDiscussionInput"
		},
		createTeamDiscussionComment:{
			input:"CreateTeamDiscussionCommentInput"
		},
		createUserList:{
			input:"CreateUserListInput"
		},
		declineTopicSuggestion:{
			input:"DeclineTopicSuggestionInput"
		},
		deleteBranchProtectionRule:{
			input:"DeleteBranchProtectionRuleInput"
		},
		deleteDeployment:{
			input:"DeleteDeploymentInput"
		},
		deleteDiscussion:{
			input:"DeleteDiscussionInput"
		},
		deleteDiscussionComment:{
			input:"DeleteDiscussionCommentInput"
		},
		deleteEnvironment:{
			input:"DeleteEnvironmentInput"
		},
		deleteIpAllowListEntry:{
			input:"DeleteIpAllowListEntryInput"
		},
		deleteIssue:{
			input:"DeleteIssueInput"
		},
		deleteIssueComment:{
			input:"DeleteIssueCommentInput"
		},
		deleteLabel:{
			input:"DeleteLabelInput"
		},
		deleteLinkedBranch:{
			input:"DeleteLinkedBranchInput"
		},
		deletePackageVersion:{
			input:"DeletePackageVersionInput"
		},
		deleteProject:{
			input:"DeleteProjectInput"
		},
		deleteProjectCard:{
			input:"DeleteProjectCardInput"
		},
		deleteProjectColumn:{
			input:"DeleteProjectColumnInput"
		},
		deleteProjectV2:{
			input:"DeleteProjectV2Input"
		},
		deleteProjectV2Field:{
			input:"DeleteProjectV2FieldInput"
		},
		deleteProjectV2Item:{
			input:"DeleteProjectV2ItemInput"
		},
		deleteProjectV2StatusUpdate:{
			input:"DeleteProjectV2StatusUpdateInput"
		},
		deleteProjectV2Workflow:{
			input:"DeleteProjectV2WorkflowInput"
		},
		deletePullRequestReview:{
			input:"DeletePullRequestReviewInput"
		},
		deletePullRequestReviewComment:{
			input:"DeletePullRequestReviewCommentInput"
		},
		deleteRef:{
			input:"DeleteRefInput"
		},
		deleteRepositoryRuleset:{
			input:"DeleteRepositoryRulesetInput"
		},
		deleteTeamDiscussion:{
			input:"DeleteTeamDiscussionInput"
		},
		deleteTeamDiscussionComment:{
			input:"DeleteTeamDiscussionCommentInput"
		},
		deleteUserList:{
			input:"DeleteUserListInput"
		},
		deleteVerifiableDomain:{
			input:"DeleteVerifiableDomainInput"
		},
		dequeuePullRequest:{
			input:"DequeuePullRequestInput"
		},
		disablePullRequestAutoMerge:{
			input:"DisablePullRequestAutoMergeInput"
		},
		dismissPullRequestReview:{
			input:"DismissPullRequestReviewInput"
		},
		dismissRepositoryVulnerabilityAlert:{
			input:"DismissRepositoryVulnerabilityAlertInput"
		},
		enablePullRequestAutoMerge:{
			input:"EnablePullRequestAutoMergeInput"
		},
		enqueuePullRequest:{
			input:"EnqueuePullRequestInput"
		},
		followOrganization:{
			input:"FollowOrganizationInput"
		},
		followUser:{
			input:"FollowUserInput"
		},
		grantEnterpriseOrganizationsMigratorRole:{
			input:"GrantEnterpriseOrganizationsMigratorRoleInput"
		},
		grantMigratorRole:{
			input:"GrantMigratorRoleInput"
		},
		importProject:{
			input:"ImportProjectInput"
		},
		inviteEnterpriseAdmin:{
			input:"InviteEnterpriseAdminInput"
		},
		inviteEnterpriseMember:{
			input:"InviteEnterpriseMemberInput"
		},
		linkProjectV2ToRepository:{
			input:"LinkProjectV2ToRepositoryInput"
		},
		linkProjectV2ToTeam:{
			input:"LinkProjectV2ToTeamInput"
		},
		linkRepositoryToProject:{
			input:"LinkRepositoryToProjectInput"
		},
		lockLockable:{
			input:"LockLockableInput"
		},
		markDiscussionCommentAsAnswer:{
			input:"MarkDiscussionCommentAsAnswerInput"
		},
		markFileAsViewed:{
			input:"MarkFileAsViewedInput"
		},
		markNotificationAsDone:{
			input:"MarkNotificationAsDoneInput"
		},
		markProjectV2AsTemplate:{
			input:"MarkProjectV2AsTemplateInput"
		},
		markPullRequestReadyForReview:{
			input:"MarkPullRequestReadyForReviewInput"
		},
		mergeBranch:{
			input:"MergeBranchInput"
		},
		mergePullRequest:{
			input:"MergePullRequestInput"
		},
		minimizeComment:{
			input:"MinimizeCommentInput"
		},
		moveProjectCard:{
			input:"MoveProjectCardInput"
		},
		moveProjectColumn:{
			input:"MoveProjectColumnInput"
		},
		pinEnvironment:{
			input:"PinEnvironmentInput"
		},
		pinIssue:{
			input:"PinIssueInput"
		},
		publishSponsorsTier:{
			input:"PublishSponsorsTierInput"
		},
		regenerateEnterpriseIdentityProviderRecoveryCodes:{
			input:"RegenerateEnterpriseIdentityProviderRecoveryCodesInput"
		},
		regenerateVerifiableDomainToken:{
			input:"RegenerateVerifiableDomainTokenInput"
		},
		rejectDeployments:{
			input:"RejectDeploymentsInput"
		},
		removeAssigneesFromAssignable:{
			input:"RemoveAssigneesFromAssignableInput"
		},
		removeEnterpriseAdmin:{
			input:"RemoveEnterpriseAdminInput"
		},
		removeEnterpriseIdentityProvider:{
			input:"RemoveEnterpriseIdentityProviderInput"
		},
		removeEnterpriseMember:{
			input:"RemoveEnterpriseMemberInput"
		},
		removeEnterpriseOrganization:{
			input:"RemoveEnterpriseOrganizationInput"
		},
		removeEnterpriseSupportEntitlement:{
			input:"RemoveEnterpriseSupportEntitlementInput"
		},
		removeLabelsFromLabelable:{
			input:"RemoveLabelsFromLabelableInput"
		},
		removeOutsideCollaborator:{
			input:"RemoveOutsideCollaboratorInput"
		},
		removeReaction:{
			input:"RemoveReactionInput"
		},
		removeStar:{
			input:"RemoveStarInput"
		},
		removeSubIssue:{
			input:"RemoveSubIssueInput"
		},
		removeUpvote:{
			input:"RemoveUpvoteInput"
		},
		reopenDiscussion:{
			input:"ReopenDiscussionInput"
		},
		reopenIssue:{
			input:"ReopenIssueInput"
		},
		reopenPullRequest:{
			input:"ReopenPullRequestInput"
		},
		reorderEnvironment:{
			input:"ReorderEnvironmentInput"
		},
		reprioritizeSubIssue:{
			input:"ReprioritizeSubIssueInput"
		},
		requestReviews:{
			input:"RequestReviewsInput"
		},
		rerequestCheckSuite:{
			input:"RerequestCheckSuiteInput"
		},
		resolveReviewThread:{
			input:"ResolveReviewThreadInput"
		},
		retireSponsorsTier:{
			input:"RetireSponsorsTierInput"
		},
		revertPullRequest:{
			input:"RevertPullRequestInput"
		},
		revokeEnterpriseOrganizationsMigratorRole:{
			input:"RevokeEnterpriseOrganizationsMigratorRoleInput"
		},
		revokeMigratorRole:{
			input:"RevokeMigratorRoleInput"
		},
		setEnterpriseIdentityProvider:{
			input:"SetEnterpriseIdentityProviderInput"
		},
		setOrganizationInteractionLimit:{
			input:"SetOrganizationInteractionLimitInput"
		},
		setRepositoryInteractionLimit:{
			input:"SetRepositoryInteractionLimitInput"
		},
		setUserInteractionLimit:{
			input:"SetUserInteractionLimitInput"
		},
		startOrganizationMigration:{
			input:"StartOrganizationMigrationInput"
		},
		startRepositoryMigration:{
			input:"StartRepositoryMigrationInput"
		},
		submitPullRequestReview:{
			input:"SubmitPullRequestReviewInput"
		},
		transferEnterpriseOrganization:{
			input:"TransferEnterpriseOrganizationInput"
		},
		transferIssue:{
			input:"TransferIssueInput"
		},
		unarchiveProjectV2Item:{
			input:"UnarchiveProjectV2ItemInput"
		},
		unarchiveRepository:{
			input:"UnarchiveRepositoryInput"
		},
		unfollowOrganization:{
			input:"UnfollowOrganizationInput"
		},
		unfollowUser:{
			input:"UnfollowUserInput"
		},
		unlinkProjectV2FromRepository:{
			input:"UnlinkProjectV2FromRepositoryInput"
		},
		unlinkProjectV2FromTeam:{
			input:"UnlinkProjectV2FromTeamInput"
		},
		unlinkRepositoryFromProject:{
			input:"UnlinkRepositoryFromProjectInput"
		},
		unlockLockable:{
			input:"UnlockLockableInput"
		},
		unmarkDiscussionCommentAsAnswer:{
			input:"UnmarkDiscussionCommentAsAnswerInput"
		},
		unmarkFileAsViewed:{
			input:"UnmarkFileAsViewedInput"
		},
		unmarkIssueAsDuplicate:{
			input:"UnmarkIssueAsDuplicateInput"
		},
		unmarkProjectV2AsTemplate:{
			input:"UnmarkProjectV2AsTemplateInput"
		},
		unminimizeComment:{
			input:"UnminimizeCommentInput"
		},
		unpinIssue:{
			input:"UnpinIssueInput"
		},
		unresolveReviewThread:{
			input:"UnresolveReviewThreadInput"
		},
		unsubscribeFromNotifications:{
			input:"UnsubscribeFromNotificationsInput"
		},
		updateBranchProtectionRule:{
			input:"UpdateBranchProtectionRuleInput"
		},
		updateCheckRun:{
			input:"UpdateCheckRunInput"
		},
		updateCheckSuitePreferences:{
			input:"UpdateCheckSuitePreferencesInput"
		},
		updateDiscussion:{
			input:"UpdateDiscussionInput"
		},
		updateDiscussionComment:{
			input:"UpdateDiscussionCommentInput"
		},
		updateEnterpriseAdministratorRole:{
			input:"UpdateEnterpriseAdministratorRoleInput"
		},
		updateEnterpriseAllowPrivateRepositoryForkingSetting:{
			input:"UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput"
		},
		updateEnterpriseDefaultRepositoryPermissionSetting:{
			input:"UpdateEnterpriseDefaultRepositoryPermissionSettingInput"
		},
		updateEnterpriseDeployKeySetting:{
			input:"UpdateEnterpriseDeployKeySettingInput"
		},
		updateEnterpriseMembersCanChangeRepositoryVisibilitySetting:{
			input:"UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput"
		},
		updateEnterpriseMembersCanCreateRepositoriesSetting:{
			input:"UpdateEnterpriseMembersCanCreateRepositoriesSettingInput"
		},
		updateEnterpriseMembersCanDeleteIssuesSetting:{
			input:"UpdateEnterpriseMembersCanDeleteIssuesSettingInput"
		},
		updateEnterpriseMembersCanDeleteRepositoriesSetting:{
			input:"UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput"
		},
		updateEnterpriseMembersCanInviteCollaboratorsSetting:{
			input:"UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput"
		},
		updateEnterpriseMembersCanMakePurchasesSetting:{
			input:"UpdateEnterpriseMembersCanMakePurchasesSettingInput"
		},
		updateEnterpriseMembersCanUpdateProtectedBranchesSetting:{
			input:"UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput"
		},
		updateEnterpriseMembersCanViewDependencyInsightsSetting:{
			input:"UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput"
		},
		updateEnterpriseOrganizationProjectsSetting:{
			input:"UpdateEnterpriseOrganizationProjectsSettingInput"
		},
		updateEnterpriseOwnerOrganizationRole:{
			input:"UpdateEnterpriseOwnerOrganizationRoleInput"
		},
		updateEnterpriseProfile:{
			input:"UpdateEnterpriseProfileInput"
		},
		updateEnterpriseRepositoryProjectsSetting:{
			input:"UpdateEnterpriseRepositoryProjectsSettingInput"
		},
		updateEnterpriseTeamDiscussionsSetting:{
			input:"UpdateEnterpriseTeamDiscussionsSettingInput"
		},
		updateEnterpriseTwoFactorAuthenticationDisallowedMethodsSetting:{
			input:"UpdateEnterpriseTwoFactorAuthenticationDisallowedMethodsSettingInput"
		},
		updateEnterpriseTwoFactorAuthenticationRequiredSetting:{
			input:"UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput"
		},
		updateEnvironment:{
			input:"UpdateEnvironmentInput"
		},
		updateIpAllowListEnabledSetting:{
			input:"UpdateIpAllowListEnabledSettingInput"
		},
		updateIpAllowListEntry:{
			input:"UpdateIpAllowListEntryInput"
		},
		updateIpAllowListForInstalledAppsEnabledSetting:{
			input:"UpdateIpAllowListForInstalledAppsEnabledSettingInput"
		},
		updateIssue:{
			input:"UpdateIssueInput"
		},
		updateIssueComment:{
			input:"UpdateIssueCommentInput"
		},
		updateLabel:{
			input:"UpdateLabelInput"
		},
		updateNotificationRestrictionSetting:{
			input:"UpdateNotificationRestrictionSettingInput"
		},
		updateOrganizationAllowPrivateRepositoryForkingSetting:{
			input:"UpdateOrganizationAllowPrivateRepositoryForkingSettingInput"
		},
		updateOrganizationWebCommitSignoffSetting:{
			input:"UpdateOrganizationWebCommitSignoffSettingInput"
		},
		updatePatreonSponsorability:{
			input:"UpdatePatreonSponsorabilityInput"
		},
		updateProject:{
			input:"UpdateProjectInput"
		},
		updateProjectCard:{
			input:"UpdateProjectCardInput"
		},
		updateProjectColumn:{
			input:"UpdateProjectColumnInput"
		},
		updateProjectV2:{
			input:"UpdateProjectV2Input"
		},
		updateProjectV2Collaborators:{
			input:"UpdateProjectV2CollaboratorsInput"
		},
		updateProjectV2DraftIssue:{
			input:"UpdateProjectV2DraftIssueInput"
		},
		updateProjectV2Field:{
			input:"UpdateProjectV2FieldInput"
		},
		updateProjectV2ItemFieldValue:{
			input:"UpdateProjectV2ItemFieldValueInput"
		},
		updateProjectV2ItemPosition:{
			input:"UpdateProjectV2ItemPositionInput"
		},
		updateProjectV2StatusUpdate:{
			input:"UpdateProjectV2StatusUpdateInput"
		},
		updatePullRequest:{
			input:"UpdatePullRequestInput"
		},
		updatePullRequestBranch:{
			input:"UpdatePullRequestBranchInput"
		},
		updatePullRequestReview:{
			input:"UpdatePullRequestReviewInput"
		},
		updatePullRequestReviewComment:{
			input:"UpdatePullRequestReviewCommentInput"
		},
		updateRef:{
			input:"UpdateRefInput"
		},
		updateRefs:{
			input:"UpdateRefsInput"
		},
		updateRepository:{
			input:"UpdateRepositoryInput"
		},
		updateRepositoryRuleset:{
			input:"UpdateRepositoryRulesetInput"
		},
		updateRepositoryWebCommitSignoffSetting:{
			input:"UpdateRepositoryWebCommitSignoffSettingInput"
		},
		updateSponsorshipPreferences:{
			input:"UpdateSponsorshipPreferencesInput"
		},
		updateSubscription:{
			input:"UpdateSubscriptionInput"
		},
		updateTeamDiscussion:{
			input:"UpdateTeamDiscussionInput"
		},
		updateTeamDiscussionComment:{
			input:"UpdateTeamDiscussionCommentInput"
		},
		updateTeamReviewAssignment:{
			input:"UpdateTeamReviewAssignmentInput"
		},
		updateTeamsRepository:{
			input:"UpdateTeamsRepositoryInput"
		},
		updateTopics:{
			input:"UpdateTopicsInput"
		},
		updateUserList:{
			input:"UpdateUserListInput"
		},
		updateUserListsForItem:{
			input:"UpdateUserListsForItemInput"
		},
		verifyVerifiableDomain:{
			input:"VerifyVerifiableDomainInput"
		}
	},
	NotificationRestrictionSettingValue: "enum" as const,
	OIDCProvider:{
		externalIdentities:{

		}
	},
	OIDCProviderType: "enum" as const,
	OauthApplicationCreateAuditEntryState: "enum" as const,
	OperationType: "enum" as const,
	OrderDirection: "enum" as const,
	OrgAddMemberAuditEntryPermission: "enum" as const,
	OrgCreateAuditEntryBillingPlan: "enum" as const,
	OrgEnterpriseOwnerOrder:{
		direction:"OrderDirection",
		field:"OrgEnterpriseOwnerOrderField"
	},
	OrgEnterpriseOwnerOrderField: "enum" as const,
	OrgRemoveBillingManagerAuditEntryReason: "enum" as const,
	OrgRemoveMemberAuditEntryMembershipType: "enum" as const,
	OrgRemoveMemberAuditEntryReason: "enum" as const,
	OrgRemoveOutsideCollaboratorAuditEntryMembershipType: "enum" as const,
	OrgRemoveOutsideCollaboratorAuditEntryReason: "enum" as const,
	OrgUpdateDefaultRepositoryPermissionAuditEntryPermission: "enum" as const,
	OrgUpdateMemberAuditEntryPermission: "enum" as const,
	OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility: "enum" as const,
	Organization:{
		anyPinnableItems:{
			type:"PinnableItemType"
		},
		auditLog:{
			orderBy:"AuditLogOrder"
		},
		avatarUrl:{

		},
		domains:{
			orderBy:"VerifiableDomainOrder"
		},
		enterpriseOwners:{
			orderBy:"OrgEnterpriseOwnerOrder",
			organizationRole:"RoleInOrganization"
		},
		ipAllowListEntries:{
			orderBy:"IpAllowListEntryOrder"
		},
		isSponsoredBy:{

		},
		lifetimeReceivedSponsorshipValues:{
			orderBy:"SponsorAndLifetimeValueOrder"
		},
		mannequins:{
			orderBy:"MannequinOrder"
		},
		memberStatuses:{
			orderBy:"UserStatusOrder"
		},
		membersWithRole:{

		},
		packages:{
			orderBy:"PackageOrder",
			packageType:"PackageType"
		},
		pendingMembers:{

		},
		pinnableItems:{
			types:"PinnableItemType"
		},
		pinnedItems:{
			types:"PinnableItemType"
		},
		project:{

		},
		projectV2:{

		},
		projects:{
			orderBy:"ProjectOrder",
			states:"ProjectState"
		},
		projectsV2:{
			minPermissionLevel:"ProjectV2PermissionLevel",
			orderBy:"ProjectV2Order"
		},
		recentProjects:{

		},
		repositories:{
			affiliations:"RepositoryAffiliation",
			orderBy:"RepositoryOrder",
			ownerAffiliations:"RepositoryAffiliation",
			privacy:"RepositoryPrivacy",
			visibility:"RepositoryVisibility"
		},
		repository:{

		},
		repositoryDiscussionComments:{

		},
		repositoryDiscussions:{
			orderBy:"DiscussionOrder",
			states:"DiscussionState"
		},
		repositoryMigrations:{
			orderBy:"RepositoryMigrationOrder",
			state:"MigrationState"
		},
		ruleset:{

		},
		rulesets:{
			targets:"RepositoryRulesetTarget"
		},
		sponsoring:{
			orderBy:"SponsorOrder"
		},
		sponsors:{
			orderBy:"SponsorOrder"
		},
		sponsorsActivities:{
			actions:"SponsorsActivityAction",
			orderBy:"SponsorsActivityOrder",
			period:"SponsorsActivityPeriod",
			since:"DateTime",
			until:"DateTime"
		},
		sponsorshipForViewerAsSponsor:{

		},
		sponsorshipForViewerAsSponsorable:{

		},
		sponsorshipNewsletters:{
			orderBy:"SponsorshipNewsletterOrder"
		},
		sponsorshipsAsMaintainer:{
			orderBy:"SponsorshipOrder"
		},
		sponsorshipsAsSponsor:{
			orderBy:"SponsorshipOrder"
		},
		team:{

		},
		teams:{
			notificationSetting:"TeamNotificationSetting",
			orderBy:"TeamOrder",
			privacy:"TeamPrivacy",
			role:"TeamRole"
		},
		totalSponsorshipAmountAsSponsorInCents:{
			since:"DateTime",
			until:"DateTime"
		}
	},
	OrganizationIdentityProvider:{
		externalIdentities:{

		}
	},
	OrganizationInvitationRole: "enum" as const,
	OrganizationInvitationSource: "enum" as const,
	OrganizationInvitationType: "enum" as const,
	OrganizationMemberRole: "enum" as const,
	OrganizationMembersCanCreateRepositoriesSettingValue: "enum" as const,
	OrganizationMigrationState: "enum" as const,
	OrganizationOrder:{
		direction:"OrderDirection",
		field:"OrganizationOrderField"
	},
	OrganizationOrderField: "enum" as const,
	OrganizationTeamsHovercardContext:{
		relevantTeams:{

		}
	},
	OrganizationsHovercardContext:{
		relevantOrganizations:{
			orderBy:"OrganizationOrder"
		}
	},
	Package:{
		version:{

		},
		versions:{
			orderBy:"PackageVersionOrder"
		}
	},
	PackageFileOrder:{
		direction:"OrderDirection",
		field:"PackageFileOrderField"
	},
	PackageFileOrderField: "enum" as const,
	PackageOrder:{
		direction:"OrderDirection",
		field:"PackageOrderField"
	},
	PackageOrderField: "enum" as const,
	PackageOwner:{
		packages:{
			orderBy:"PackageOrder",
			packageType:"PackageType"
		}
	},
	PackageType: "enum" as const,
	PackageVersion:{
		files:{
			orderBy:"PackageFileOrder"
		}
	},
	PackageVersionOrder:{
		direction:"OrderDirection",
		field:"PackageVersionOrderField"
	},
	PackageVersionOrderField: "enum" as const,
	PatchStatus: "enum" as const,
	PinEnvironmentInput:{

	},
	PinIssueInput:{

	},
	PinnableItemType: "enum" as const,
	PinnedDiscussionGradient: "enum" as const,
	PinnedDiscussionPattern: "enum" as const,
	PinnedEnvironmentOrder:{
		direction:"OrderDirection",
		field:"PinnedEnvironmentOrderField"
	},
	PinnedEnvironmentOrderField: "enum" as const,
	PreciseDateTime: `scalar.PreciseDateTime` as const,
	ProfileItemShowcase:{
		items:{

		}
	},
	ProfileOwner:{
		anyPinnableItems:{
			type:"PinnableItemType"
		},
		pinnableItems:{
			types:"PinnableItemType"
		},
		pinnedItems:{
			types:"PinnableItemType"
		}
	},
	Project:{
		columns:{

		},
		pendingCards:{
			archivedStates:"ProjectCardArchivedState"
		}
	},
	ProjectCardArchivedState: "enum" as const,
	ProjectCardImport:{

	},
	ProjectCardState: "enum" as const,
	ProjectColumn:{
		cards:{
			archivedStates:"ProjectCardArchivedState"
		}
	},
	ProjectColumnImport:{
		issues:"ProjectCardImport"
	},
	ProjectColumnPurpose: "enum" as const,
	ProjectOrder:{
		direction:"OrderDirection",
		field:"ProjectOrderField"
	},
	ProjectOrderField: "enum" as const,
	ProjectOwner:{
		project:{

		},
		projects:{
			orderBy:"ProjectOrder",
			states:"ProjectState"
		}
	},
	ProjectState: "enum" as const,
	ProjectTemplate: "enum" as const,
	ProjectV2:{
		field:{

		},
		fields:{
			orderBy:"ProjectV2FieldOrder"
		},
		items:{
			orderBy:"ProjectV2ItemOrder"
		},
		repositories:{
			orderBy:"RepositoryOrder"
		},
		statusUpdates:{
			orderBy:"ProjectV2StatusOrder"
		},
		teams:{
			orderBy:"TeamOrder"
		},
		view:{

		},
		views:{
			orderBy:"ProjectV2ViewOrder"
		},
		workflow:{

		},
		workflows:{
			orderBy:"ProjectV2WorkflowOrder"
		}
	},
	ProjectV2Collaborator:{
		role:"ProjectV2Roles"
	},
	ProjectV2CustomFieldType: "enum" as const,
	ProjectV2FieldOrder:{
		direction:"OrderDirection",
		field:"ProjectV2FieldOrderField"
	},
	ProjectV2FieldOrderField: "enum" as const,
	ProjectV2FieldType: "enum" as const,
	ProjectV2FieldValue:{
		date:"Date"
	},
	ProjectV2Filters:{
		state:"ProjectV2State"
	},
	ProjectV2Item:{
		fieldValueByName:{

		},
		fieldValues:{
			orderBy:"ProjectV2ItemFieldValueOrder"
		}
	},
	ProjectV2ItemFieldLabelValue:{
		labels:{

		}
	},
	ProjectV2ItemFieldPullRequestValue:{
		pullRequests:{
			orderBy:"PullRequestOrder"
		}
	},
	ProjectV2ItemFieldReviewerValue:{
		reviewers:{

		}
	},
	ProjectV2ItemFieldUserValue:{
		users:{

		}
	},
	ProjectV2ItemFieldValueOrder:{
		direction:"OrderDirection",
		field:"ProjectV2ItemFieldValueOrderField"
	},
	ProjectV2ItemFieldValueOrderField: "enum" as const,
	ProjectV2ItemOrder:{
		direction:"OrderDirection",
		field:"ProjectV2ItemOrderField"
	},
	ProjectV2ItemOrderField: "enum" as const,
	ProjectV2ItemType: "enum" as const,
	ProjectV2Order:{
		direction:"OrderDirection",
		field:"ProjectV2OrderField"
	},
	ProjectV2OrderField: "enum" as const,
	ProjectV2Owner:{
		projectV2:{

		},
		projectsV2:{
			minPermissionLevel:"ProjectV2PermissionLevel",
			orderBy:"ProjectV2Order"
		}
	},
	ProjectV2PermissionLevel: "enum" as const,
	ProjectV2Recent:{
		recentProjects:{

		}
	},
	ProjectV2Roles: "enum" as const,
	ProjectV2SingleSelectField:{
		options:{

		}
	},
	ProjectV2SingleSelectFieldOptionColor: "enum" as const,
	ProjectV2SingleSelectFieldOptionInput:{
		color:"ProjectV2SingleSelectFieldOptionColor"
	},
	ProjectV2State: "enum" as const,
	ProjectV2StatusOrder:{
		direction:"OrderDirection",
		field:"ProjectV2StatusUpdateOrderField"
	},
	ProjectV2StatusUpdateOrderField: "enum" as const,
	ProjectV2StatusUpdateStatus: "enum" as const,
	ProjectV2View:{
		fields:{
			orderBy:"ProjectV2FieldOrder"
		},
		groupBy:{
			orderBy:"ProjectV2FieldOrder"
		},
		groupByFields:{
			orderBy:"ProjectV2FieldOrder"
		},
		sortBy:{

		},
		sortByFields:{

		},
		verticalGroupBy:{
			orderBy:"ProjectV2FieldOrder"
		},
		verticalGroupByFields:{
			orderBy:"ProjectV2FieldOrder"
		},
		visibleFields:{
			orderBy:"ProjectV2FieldOrder"
		}
	},
	ProjectV2ViewLayout: "enum" as const,
	ProjectV2ViewOrder:{
		direction:"OrderDirection",
		field:"ProjectV2ViewOrderField"
	},
	ProjectV2ViewOrderField: "enum" as const,
	ProjectV2WorkflowOrder:{
		direction:"OrderDirection",
		field:"ProjectV2WorkflowsOrderField"
	},
	ProjectV2WorkflowsOrderField: "enum" as const,
	PropertyTargetDefinitionInput:{

	},
	PublishSponsorsTierInput:{

	},
	PullRequest:{
		assignees:{

		},
		closingIssuesReferences:{
			orderBy:"IssueOrder"
		},
		comments:{
			orderBy:"IssueCommentOrder"
		},
		commits:{

		},
		files:{

		},
		hovercard:{

		},
		labels:{
			orderBy:"LabelOrder"
		},
		latestOpinionatedReviews:{

		},
		latestReviews:{

		},
		participants:{

		},
		projectCards:{
			archivedStates:"ProjectCardArchivedState"
		},
		projectItems:{

		},
		projectV2:{

		},
		projectsV2:{
			minPermissionLevel:"ProjectV2PermissionLevel",
			orderBy:"ProjectV2Order"
		},
		reactions:{
			content:"ReactionContent",
			orderBy:"ReactionOrder"
		},
		reviewRequests:{

		},
		reviewThreads:{

		},
		reviews:{
			states:"PullRequestReviewState"
		},
		timeline:{
			since:"DateTime"
		},
		timelineItems:{
			itemTypes:"PullRequestTimelineItemsItemType",
			since:"DateTime"
		},
		userContentEdits:{

		},
		viewerMergeBodyText:{
			mergeType:"PullRequestMergeMethod"
		},
		viewerMergeHeadlineText:{
			mergeType:"PullRequestMergeMethod"
		}
	},
	PullRequestBranchUpdateMethod: "enum" as const,
	PullRequestCommitCommentThread:{
		comments:{

		}
	},
	PullRequestContributionsByRepository:{
		contributions:{
			orderBy:"ContributionOrder"
		}
	},
	PullRequestMergeMethod: "enum" as const,
	PullRequestOrder:{
		direction:"OrderDirection",
		field:"PullRequestOrderField"
	},
	PullRequestOrderField: "enum" as const,
	PullRequestParametersInput:{

	},
	PullRequestReview:{
		comments:{

		},
		onBehalfOf:{

		},
		reactions:{
			content:"ReactionContent",
			orderBy:"ReactionOrder"
		},
		userContentEdits:{

		}
	},
	PullRequestReviewComment:{
		reactions:{
			content:"ReactionContent",
			orderBy:"ReactionOrder"
		},
		userContentEdits:{

		}
	},
	PullRequestReviewCommentState: "enum" as const,
	PullRequestReviewContributionsByRepository:{
		contributions:{
			orderBy:"ContributionOrder"
		}
	},
	PullRequestReviewDecision: "enum" as const,
	PullRequestReviewEvent: "enum" as const,
	PullRequestReviewState: "enum" as const,
	PullRequestReviewThread:{
		comments:{

		}
	},
	PullRequestReviewThreadSubjectType: "enum" as const,
	PullRequestState: "enum" as const,
	PullRequestThread:{
		comments:{

		}
	},
	PullRequestTimelineItemsItemType: "enum" as const,
	PullRequestUpdateState: "enum" as const,
	Query:{
		codeOfConduct:{

		},
		enterprise:{

		},
		enterpriseAdministratorInvitation:{
			role:"EnterpriseAdministratorRole"
		},
		enterpriseAdministratorInvitationByToken:{

		},
		enterpriseMemberInvitation:{

		},
		enterpriseMemberInvitationByToken:{

		},
		license:{

		},
		marketplaceCategories:{

		},
		marketplaceCategory:{

		},
		marketplaceListing:{

		},
		marketplaceListings:{

		},
		node:{

		},
		nodes:{

		},
		organization:{

		},
		rateLimit:{

		},
		repository:{

		},
		repositoryOwner:{

		},
		resource:{
			url:"URI"
		},
		search:{
			type:"SearchType"
		},
		securityAdvisories:{
			classifications:"SecurityAdvisoryClassification",
			identifier:"SecurityAdvisoryIdentifierFilter",
			orderBy:"SecurityAdvisoryOrder",
			publishedSince:"DateTime",
			updatedSince:"DateTime"
		},
		securityAdvisory:{

		},
		securityVulnerabilities:{
			classifications:"SecurityAdvisoryClassification",
			ecosystem:"SecurityAdvisoryEcosystem",
			orderBy:"SecurityVulnerabilityOrder",
			severities:"SecurityAdvisorySeverity"
		},
		sponsorables:{
			dependencyEcosystem:"SecurityAdvisoryEcosystem",
			ecosystem:"DependencyGraphEcosystem",
			orderBy:"SponsorableOrder"
		},
		topic:{

		},
		user:{

		}
	},
	Reactable:{
		reactions:{
			content:"ReactionContent",
			orderBy:"ReactionOrder"
		}
	},
	ReactionContent: "enum" as const,
	ReactionGroup:{
		reactors:{

		},
		users:{

		}
	},
	ReactionOrder:{
		direction:"OrderDirection",
		field:"ReactionOrderField"
	},
	ReactionOrderField: "enum" as const,
	Ref:{
		associatedPullRequests:{
			orderBy:"IssueOrder",
			states:"PullRequestState"
		},
		compare:{

		},
		rules:{
			orderBy:"RepositoryRuleOrder"
		}
	},
	RefNameConditionTargetInput:{

	},
	RefOrder:{
		direction:"OrderDirection",
		field:"RefOrderField"
	},
	RefOrderField: "enum" as const,
	RefUpdate:{
		afterOid:"GitObjectID",
		beforeOid:"GitObjectID",
		name:"GitRefname"
	},
	RegenerateEnterpriseIdentityProviderRecoveryCodesInput:{

	},
	RegenerateVerifiableDomainTokenInput:{

	},
	RejectDeploymentsInput:{

	},
	Release:{
		mentions:{

		},
		reactions:{
			content:"ReactionContent",
			orderBy:"ReactionOrder"
		},
		releaseAssets:{

		},
		shortDescriptionHTML:{

		}
	},
	ReleaseOrder:{
		direction:"OrderDirection",
		field:"ReleaseOrderField"
	},
	ReleaseOrderField: "enum" as const,
	RemoveAssigneesFromAssignableInput:{

	},
	RemoveEnterpriseAdminInput:{

	},
	RemoveEnterpriseIdentityProviderInput:{

	},
	RemoveEnterpriseMemberInput:{

	},
	RemoveEnterpriseOrganizationInput:{

	},
	RemoveEnterpriseSupportEntitlementInput:{

	},
	RemoveLabelsFromLabelableInput:{

	},
	RemoveOutsideCollaboratorInput:{

	},
	RemoveReactionInput:{
		content:"ReactionContent"
	},
	RemoveStarInput:{

	},
	RemoveSubIssueInput:{

	},
	RemoveUpvoteInput:{

	},
	ReopenDiscussionInput:{

	},
	ReopenIssueInput:{

	},
	ReopenPullRequestInput:{

	},
	ReorderEnvironmentInput:{

	},
	RepoAccessAuditEntryVisibility: "enum" as const,
	RepoAddMemberAuditEntryVisibility: "enum" as const,
	RepoArchivedAuditEntryVisibility: "enum" as const,
	RepoChangeMergeSettingAuditEntryMergeType: "enum" as const,
	RepoCreateAuditEntryVisibility: "enum" as const,
	RepoDestroyAuditEntryVisibility: "enum" as const,
	RepoRemoveMemberAuditEntryVisibility: "enum" as const,
	ReportedContentClassifiers: "enum" as const,
	Repository:{
		assignableUsers:{

		},
		branchProtectionRules:{

		},
		codeowners:{

		},
		collaborators:{
			affiliation:"CollaboratorAffiliation"
		},
		commitComments:{

		},
		dependencyGraphManifests:{

		},
		deployKeys:{

		},
		deployments:{
			orderBy:"DeploymentOrder"
		},
		discussion:{

		},
		discussionCategories:{

		},
		discussionCategory:{

		},
		discussions:{
			orderBy:"DiscussionOrder",
			states:"DiscussionState"
		},
		environment:{

		},
		environments:{
			orderBy:"Environments",
			pinnedEnvironmentFilter:"EnvironmentPinnedFilterField"
		},
		forks:{
			affiliations:"RepositoryAffiliation",
			orderBy:"RepositoryOrder",
			ownerAffiliations:"RepositoryAffiliation",
			privacy:"RepositoryPrivacy",
			visibility:"RepositoryVisibility"
		},
		issue:{

		},
		issueOrPullRequest:{

		},
		issues:{
			filterBy:"IssueFilters",
			orderBy:"IssueOrder",
			states:"IssueState"
		},
		label:{

		},
		labels:{
			orderBy:"LabelOrder"
		},
		languages:{
			orderBy:"LanguageOrder"
		},
		mentionableUsers:{

		},
		mergeQueue:{

		},
		milestone:{

		},
		milestones:{
			orderBy:"MilestoneOrder",
			states:"MilestoneState"
		},
		object:{
			oid:"GitObjectID"
		},
		packages:{
			orderBy:"PackageOrder",
			packageType:"PackageType"
		},
		pinnedDiscussions:{

		},
		pinnedEnvironments:{
			orderBy:"PinnedEnvironmentOrder"
		},
		pinnedIssues:{

		},
		project:{

		},
		projectV2:{

		},
		projects:{
			orderBy:"ProjectOrder",
			states:"ProjectState"
		},
		projectsV2:{
			minPermissionLevel:"ProjectV2PermissionLevel",
			orderBy:"ProjectV2Order"
		},
		pullRequest:{

		},
		pullRequests:{
			orderBy:"IssueOrder",
			states:"PullRequestState"
		},
		recentProjects:{

		},
		ref:{

		},
		refs:{
			direction:"OrderDirection",
			orderBy:"RefOrder"
		},
		release:{

		},
		releases:{
			orderBy:"ReleaseOrder"
		},
		repositoryTopics:{

		},
		ruleset:{

		},
		rulesets:{
			targets:"RepositoryRulesetTarget"
		},
		shortDescriptionHTML:{

		},
		stargazers:{
			orderBy:"StarOrder"
		},
		submodules:{

		},
		vulnerabilityAlert:{

		},
		vulnerabilityAlerts:{
			dependencyScopes:"RepositoryVulnerabilityAlertDependencyScope",
			states:"RepositoryVulnerabilityAlertState"
		},
		watchers:{

		}
	},
	RepositoryAffiliation: "enum" as const,
	RepositoryContributionType: "enum" as const,
	RepositoryDiscussionAuthor:{
		repositoryDiscussions:{
			orderBy:"DiscussionOrder",
			states:"DiscussionState"
		}
	},
	RepositoryDiscussionCommentAuthor:{
		repositoryDiscussionComments:{

		}
	},
	RepositoryIdConditionTargetInput:{

	},
	RepositoryInfo:{
		shortDescriptionHTML:{

		}
	},
	RepositoryInteractionLimit: "enum" as const,
	RepositoryInteractionLimitExpiry: "enum" as const,
	RepositoryInteractionLimitOrigin: "enum" as const,
	RepositoryInvitationOrder:{
		direction:"OrderDirection",
		field:"RepositoryInvitationOrderField"
	},
	RepositoryInvitationOrderField: "enum" as const,
	RepositoryLockReason: "enum" as const,
	RepositoryMigrationOrder:{
		direction:"RepositoryMigrationOrderDirection",
		field:"RepositoryMigrationOrderField"
	},
	RepositoryMigrationOrderDirection: "enum" as const,
	RepositoryMigrationOrderField: "enum" as const,
	RepositoryNameConditionTargetInput:{

	},
	RepositoryOrder:{
		direction:"OrderDirection",
		field:"RepositoryOrderField"
	},
	RepositoryOrderField: "enum" as const,
	RepositoryOwner:{
		avatarUrl:{

		},
		repositories:{
			affiliations:"RepositoryAffiliation",
			orderBy:"RepositoryOrder",
			ownerAffiliations:"RepositoryAffiliation",
			privacy:"RepositoryPrivacy",
			visibility:"RepositoryVisibility"
		},
		repository:{

		}
	},
	RepositoryPermission: "enum" as const,
	RepositoryPrivacy: "enum" as const,
	RepositoryPropertyConditionTargetInput:{
		exclude:"PropertyTargetDefinitionInput",
		include:"PropertyTargetDefinitionInput"
	},
	RepositoryRuleConditionsInput:{
		refName:"RefNameConditionTargetInput",
		repositoryId:"RepositoryIdConditionTargetInput",
		repositoryName:"RepositoryNameConditionTargetInput",
		repositoryProperty:"RepositoryPropertyConditionTargetInput"
	},
	RepositoryRuleInput:{
		parameters:"RuleParametersInput",
		type:"RepositoryRuleType"
	},
	RepositoryRuleOrder:{
		direction:"OrderDirection",
		field:"RepositoryRuleOrderField"
	},
	RepositoryRuleOrderField: "enum" as const,
	RepositoryRuleType: "enum" as const,
	RepositoryRuleset:{
		bypassActors:{

		},
		rules:{
			type:"RepositoryRuleType"
		}
	},
	RepositoryRulesetBypassActorBypassMode: "enum" as const,
	RepositoryRulesetBypassActorInput:{
		bypassMode:"RepositoryRulesetBypassActorBypassMode"
	},
	RepositoryRulesetTarget: "enum" as const,
	RepositoryVisibility: "enum" as const,
	RepositoryVulnerabilityAlertDependencyScope: "enum" as const,
	RepositoryVulnerabilityAlertState: "enum" as const,
	ReprioritizeSubIssueInput:{

	},
	RequestReviewsInput:{

	},
	RequestableCheckStatusState: "enum" as const,
	RequirableByPullRequest:{
		isRequired:{

		}
	},
	RequiredDeploymentsParametersInput:{

	},
	RequiredStatusCheckInput:{

	},
	RequiredStatusChecksParametersInput:{
		requiredStatusChecks:"StatusCheckConfigurationInput"
	},
	RerequestCheckSuiteInput:{

	},
	ResolveReviewThreadInput:{

	},
	RetireSponsorsTierInput:{

	},
	RevertPullRequestInput:{

	},
	RevokeEnterpriseOrganizationsMigratorRoleInput:{

	},
	RevokeEnterpriseOrganizationsMigratorRolePayload:{
		organizations:{

		}
	},
	RevokeMigratorRoleInput:{
		actorType:"ActorType"
	},
	RoleInOrganization: "enum" as const,
	RuleEnforcement: "enum" as const,
	RuleParametersInput:{
		branchNamePattern:"BranchNamePatternParametersInput",
		codeScanning:"CodeScanningParametersInput",
		commitAuthorEmailPattern:"CommitAuthorEmailPatternParametersInput",
		commitMessagePattern:"CommitMessagePatternParametersInput",
		committerEmailPattern:"CommitterEmailPatternParametersInput",
		fileExtensionRestriction:"FileExtensionRestrictionParametersInput",
		filePathRestriction:"FilePathRestrictionParametersInput",
		maxFilePathLength:"MaxFilePathLengthParametersInput",
		maxFileSize:"MaxFileSizeParametersInput",
		mergeQueue:"MergeQueueParametersInput",
		pullRequest:"PullRequestParametersInput",
		requiredDeployments:"RequiredDeploymentsParametersInput",
		requiredStatusChecks:"RequiredStatusChecksParametersInput",
		tagNamePattern:"TagNamePatternParametersInput",
		update:"UpdateParametersInput",
		workflows:"WorkflowsParametersInput"
	},
	SamlDigestAlgorithm: "enum" as const,
	SamlSignatureAlgorithm: "enum" as const,
	SavedReplyOrder:{
		direction:"OrderDirection",
		field:"SavedReplyOrderField"
	},
	SavedReplyOrderField: "enum" as const,
	SearchType: "enum" as const,
	SecurityAdvisory:{
		cwes:{

		},
		vulnerabilities:{
			classifications:"SecurityAdvisoryClassification",
			ecosystem:"SecurityAdvisoryEcosystem",
			orderBy:"SecurityVulnerabilityOrder",
			severities:"SecurityAdvisorySeverity"
		}
	},
	SecurityAdvisoryClassification: "enum" as const,
	SecurityAdvisoryEcosystem: "enum" as const,
	SecurityAdvisoryIdentifierFilter:{
		type:"SecurityAdvisoryIdentifierType"
	},
	SecurityAdvisoryIdentifierType: "enum" as const,
	SecurityAdvisoryOrder:{
		direction:"OrderDirection",
		field:"SecurityAdvisoryOrderField"
	},
	SecurityAdvisoryOrderField: "enum" as const,
	SecurityAdvisorySeverity: "enum" as const,
	SecurityVulnerabilityOrder:{
		direction:"OrderDirection",
		field:"SecurityVulnerabilityOrderField"
	},
	SecurityVulnerabilityOrderField: "enum" as const,
	SetEnterpriseIdentityProviderInput:{
		digestMethod:"SamlDigestAlgorithm",
		signatureMethod:"SamlSignatureAlgorithm",
		ssoUrl:"URI"
	},
	SetOrganizationInteractionLimitInput:{
		expiry:"RepositoryInteractionLimitExpiry",
		limit:"RepositoryInteractionLimit"
	},
	SetRepositoryInteractionLimitInput:{
		expiry:"RepositoryInteractionLimitExpiry",
		limit:"RepositoryInteractionLimit"
	},
	SetUserInteractionLimitInput:{
		expiry:"RepositoryInteractionLimitExpiry",
		limit:"RepositoryInteractionLimit"
	},
	SocialAccountProvider: "enum" as const,
	SponsorAndLifetimeValueOrder:{
		direction:"OrderDirection",
		field:"SponsorAndLifetimeValueOrderField"
	},
	SponsorAndLifetimeValueOrderField: "enum" as const,
	SponsorOrder:{
		direction:"OrderDirection",
		field:"SponsorOrderField"
	},
	SponsorOrderField: "enum" as const,
	Sponsorable:{
		isSponsoredBy:{

		},
		lifetimeReceivedSponsorshipValues:{
			orderBy:"SponsorAndLifetimeValueOrder"
		},
		sponsoring:{
			orderBy:"SponsorOrder"
		},
		sponsors:{
			orderBy:"SponsorOrder"
		},
		sponsorsActivities:{
			actions:"SponsorsActivityAction",
			orderBy:"SponsorsActivityOrder",
			period:"SponsorsActivityPeriod",
			since:"DateTime",
			until:"DateTime"
		},
		sponsorshipForViewerAsSponsor:{

		},
		sponsorshipForViewerAsSponsorable:{

		},
		sponsorshipNewsletters:{
			orderBy:"SponsorshipNewsletterOrder"
		},
		sponsorshipsAsMaintainer:{
			orderBy:"SponsorshipOrder"
		},
		sponsorshipsAsSponsor:{
			orderBy:"SponsorshipOrder"
		},
		totalSponsorshipAmountAsSponsorInCents:{
			since:"DateTime",
			until:"DateTime"
		}
	},
	SponsorableOrder:{
		direction:"OrderDirection",
		field:"SponsorableOrderField"
	},
	SponsorableOrderField: "enum" as const,
	SponsorsActivityAction: "enum" as const,
	SponsorsActivityOrder:{
		direction:"OrderDirection",
		field:"SponsorsActivityOrderField"
	},
	SponsorsActivityOrderField: "enum" as const,
	SponsorsActivityPeriod: "enum" as const,
	SponsorsCountryOrRegionCode: "enum" as const,
	SponsorsGoalKind: "enum" as const,
	SponsorsListing:{
		featuredItems:{
			featureableTypes:"SponsorsListingFeaturedItemFeatureableType"
		},
		tiers:{
			orderBy:"SponsorsTierOrder"
		}
	},
	SponsorsListingFeaturedItemFeatureableType: "enum" as const,
	SponsorsTierAdminInfo:{
		sponsorships:{
			orderBy:"SponsorshipOrder"
		}
	},
	SponsorsTierOrder:{
		direction:"OrderDirection",
		field:"SponsorsTierOrderField"
	},
	SponsorsTierOrderField: "enum" as const,
	SponsorshipNewsletterOrder:{
		direction:"OrderDirection",
		field:"SponsorshipNewsletterOrderField"
	},
	SponsorshipNewsletterOrderField: "enum" as const,
	SponsorshipOrder:{
		direction:"OrderDirection",
		field:"SponsorshipOrderField"
	},
	SponsorshipOrderField: "enum" as const,
	SponsorshipPaymentSource: "enum" as const,
	SponsorshipPrivacy: "enum" as const,
	SquashMergeCommitMessage: "enum" as const,
	SquashMergeCommitTitle: "enum" as const,
	StarOrder:{
		direction:"OrderDirection",
		field:"StarOrderField"
	},
	StarOrderField: "enum" as const,
	Starrable:{
		stargazers:{
			orderBy:"StarOrder"
		}
	},
	StartOrganizationMigrationInput:{
		sourceOrgUrl:"URI"
	},
	StartRepositoryMigrationInput:{
		sourceRepositoryUrl:"URI"
	},
	Status:{
		combinedContexts:{

		},
		context:{

		}
	},
	StatusCheckConfigurationInput:{

	},
	StatusCheckRollup:{
		contexts:{

		}
	},
	StatusContext:{
		avatarUrl:{

		},
		isRequired:{

		}
	},
	StatusState: "enum" as const,
	SubmitPullRequestReviewInput:{
		event:"PullRequestReviewEvent"
	},
	SubscriptionState: "enum" as const,
	TagNamePatternParametersInput:{

	},
	Team:{
		ancestors:{

		},
		avatarUrl:{

		},
		childTeams:{
			orderBy:"TeamOrder"
		},
		discussion:{

		},
		discussions:{
			orderBy:"TeamDiscussionOrder"
		},
		invitations:{

		},
		memberStatuses:{
			orderBy:"UserStatusOrder"
		},
		members:{
			membership:"TeamMembershipType",
			orderBy:"TeamMemberOrder",
			role:"TeamMemberRole"
		},
		projectV2:{

		},
		projectsV2:{
			filterBy:"ProjectV2Filters",
			minPermissionLevel:"ProjectV2PermissionLevel",
			orderBy:"ProjectV2Order"
		},
		repositories:{
			orderBy:"TeamRepositoryOrder"
		}
	},
	TeamDiscussion:{
		comments:{
			orderBy:"TeamDiscussionCommentOrder"
		},
		reactions:{
			content:"ReactionContent",
			orderBy:"ReactionOrder"
		},
		userContentEdits:{

		}
	},
	TeamDiscussionComment:{
		reactions:{
			content:"ReactionContent",
			orderBy:"ReactionOrder"
		},
		userContentEdits:{

		}
	},
	TeamDiscussionCommentOrder:{
		direction:"OrderDirection",
		field:"TeamDiscussionCommentOrderField"
	},
	TeamDiscussionCommentOrderField: "enum" as const,
	TeamDiscussionOrder:{
		direction:"OrderDirection",
		field:"TeamDiscussionOrderField"
	},
	TeamDiscussionOrderField: "enum" as const,
	TeamMemberOrder:{
		direction:"OrderDirection",
		field:"TeamMemberOrderField"
	},
	TeamMemberOrderField: "enum" as const,
	TeamMemberRole: "enum" as const,
	TeamMembershipType: "enum" as const,
	TeamNotificationSetting: "enum" as const,
	TeamOrder:{
		direction:"OrderDirection",
		field:"TeamOrderField"
	},
	TeamOrderField: "enum" as const,
	TeamPrivacy: "enum" as const,
	TeamRepositoryOrder:{
		direction:"OrderDirection",
		field:"TeamRepositoryOrderField"
	},
	TeamRepositoryOrderField: "enum" as const,
	TeamReviewAssignmentAlgorithm: "enum" as const,
	TeamRole: "enum" as const,
	ThreadSubscriptionFormAction: "enum" as const,
	ThreadSubscriptionState: "enum" as const,
	Topic:{
		relatedTopics:{

		},
		repositories:{
			affiliations:"RepositoryAffiliation",
			orderBy:"RepositoryOrder",
			ownerAffiliations:"RepositoryAffiliation",
			privacy:"RepositoryPrivacy",
			visibility:"RepositoryVisibility"
		},
		stargazers:{
			orderBy:"StarOrder"
		}
	},
	TopicSuggestionDeclineReason: "enum" as const,
	TrackedIssueStates: "enum" as const,
	TransferEnterpriseOrganizationInput:{

	},
	TransferIssueInput:{

	},
	TwoFactorCredentialSecurityType: "enum" as const,
	URI: `scalar.URI` as const,
	UnarchiveProjectV2ItemInput:{

	},
	UnarchiveRepositoryInput:{

	},
	UnfollowOrganizationInput:{

	},
	UnfollowUserInput:{

	},
	UnlinkProjectV2FromRepositoryInput:{

	},
	UnlinkProjectV2FromTeamInput:{

	},
	UnlinkRepositoryFromProjectInput:{

	},
	UnlockLockableInput:{

	},
	UnmarkDiscussionCommentAsAnswerInput:{

	},
	UnmarkFileAsViewedInput:{

	},
	UnmarkIssueAsDuplicateInput:{

	},
	UnmarkProjectV2AsTemplateInput:{

	},
	UnminimizeCommentInput:{

	},
	UnpinIssueInput:{

	},
	UnresolveReviewThreadInput:{

	},
	UnsubscribeFromNotificationsInput:{

	},
	UpdateBranchProtectionRuleInput:{
		requiredStatusChecks:"RequiredStatusCheckInput"
	},
	UpdateCheckRunInput:{
		actions:"CheckRunAction",
		completedAt:"DateTime",
		conclusion:"CheckConclusionState",
		detailsUrl:"URI",
		output:"CheckRunOutput",
		startedAt:"DateTime",
		status:"RequestableCheckStatusState"
	},
	UpdateCheckSuitePreferencesInput:{
		autoTriggerPreferences:"CheckSuiteAutoTriggerPreference"
	},
	UpdateDiscussionCommentInput:{

	},
	UpdateDiscussionInput:{

	},
	UpdateEnterpriseAdministratorRoleInput:{
		role:"EnterpriseAdministratorRole"
	},
	UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput:{
		policyValue:"EnterpriseAllowPrivateRepositoryForkingPolicyValue",
		settingValue:"EnterpriseEnabledDisabledSettingValue"
	},
	UpdateEnterpriseDefaultRepositoryPermissionSettingInput:{
		settingValue:"EnterpriseDefaultRepositoryPermissionSettingValue"
	},
	UpdateEnterpriseDeployKeySettingInput:{
		settingValue:"EnterpriseEnabledDisabledSettingValue"
	},
	UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput:{
		settingValue:"EnterpriseEnabledDisabledSettingValue"
	},
	UpdateEnterpriseMembersCanCreateRepositoriesSettingInput:{
		settingValue:"EnterpriseMembersCanCreateRepositoriesSettingValue"
	},
	UpdateEnterpriseMembersCanDeleteIssuesSettingInput:{
		settingValue:"EnterpriseEnabledDisabledSettingValue"
	},
	UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput:{
		settingValue:"EnterpriseEnabledDisabledSettingValue"
	},
	UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput:{
		settingValue:"EnterpriseEnabledDisabledSettingValue"
	},
	UpdateEnterpriseMembersCanMakePurchasesSettingInput:{
		settingValue:"EnterpriseMembersCanMakePurchasesSettingValue"
	},
	UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput:{
		settingValue:"EnterpriseEnabledDisabledSettingValue"
	},
	UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput:{
		settingValue:"EnterpriseEnabledDisabledSettingValue"
	},
	UpdateEnterpriseOrganizationProjectsSettingInput:{
		settingValue:"EnterpriseEnabledDisabledSettingValue"
	},
	UpdateEnterpriseOwnerOrganizationRoleInput:{
		organizationRole:"RoleInOrganization"
	},
	UpdateEnterpriseProfileInput:{

	},
	UpdateEnterpriseRepositoryProjectsSettingInput:{
		settingValue:"EnterpriseEnabledDisabledSettingValue"
	},
	UpdateEnterpriseTeamDiscussionsSettingInput:{
		settingValue:"EnterpriseEnabledDisabledSettingValue"
	},
	UpdateEnterpriseTwoFactorAuthenticationDisallowedMethodsSettingInput:{
		settingValue:"EnterpriseDisallowedMethodsSettingValue"
	},
	UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput:{
		settingValue:"EnterpriseEnabledSettingValue"
	},
	UpdateEnvironmentInput:{

	},
	UpdateIpAllowListEnabledSettingInput:{
		settingValue:"IpAllowListEnabledSettingValue"
	},
	UpdateIpAllowListEntryInput:{

	},
	UpdateIpAllowListForInstalledAppsEnabledSettingInput:{
		settingValue:"IpAllowListForInstalledAppsEnabledSettingValue"
	},
	UpdateIssueCommentInput:{

	},
	UpdateIssueInput:{
		state:"IssueState"
	},
	UpdateLabelInput:{

	},
	UpdateNotificationRestrictionSettingInput:{
		settingValue:"NotificationRestrictionSettingValue"
	},
	UpdateOrganizationAllowPrivateRepositoryForkingSettingInput:{

	},
	UpdateOrganizationWebCommitSignoffSettingInput:{

	},
	UpdateParametersInput:{

	},
	UpdatePatreonSponsorabilityInput:{

	},
	UpdateProjectCardInput:{

	},
	UpdateProjectColumnInput:{

	},
	UpdateProjectInput:{
		state:"ProjectState"
	},
	UpdateProjectV2CollaboratorsInput:{
		collaborators:"ProjectV2Collaborator"
	},
	UpdateProjectV2CollaboratorsPayload:{
		collaborators:{

		}
	},
	UpdateProjectV2DraftIssueInput:{

	},
	UpdateProjectV2FieldInput:{
		singleSelectOptions:"ProjectV2SingleSelectFieldOptionInput"
	},
	UpdateProjectV2Input:{

	},
	UpdateProjectV2ItemFieldValueInput:{
		value:"ProjectV2FieldValue"
	},
	UpdateProjectV2ItemPositionInput:{

	},
	UpdateProjectV2ItemPositionPayload:{
		items:{

		}
	},
	UpdateProjectV2StatusUpdateInput:{
		startDate:"Date",
		status:"ProjectV2StatusUpdateStatus",
		targetDate:"Date"
	},
	UpdatePullRequestBranchInput:{
		expectedHeadOid:"GitObjectID",
		updateMethod:"PullRequestBranchUpdateMethod"
	},
	UpdatePullRequestInput:{
		state:"PullRequestUpdateState"
	},
	UpdatePullRequestReviewCommentInput:{

	},
	UpdatePullRequestReviewInput:{

	},
	UpdateRefInput:{
		oid:"GitObjectID"
	},
	UpdateRefsInput:{
		refUpdates:"RefUpdate"
	},
	UpdateRepositoryInput:{
		homepageUrl:"URI"
	},
	UpdateRepositoryRulesetInput:{
		bypassActors:"RepositoryRulesetBypassActorInput",
		conditions:"RepositoryRuleConditionsInput",
		enforcement:"RuleEnforcement",
		rules:"RepositoryRuleInput",
		target:"RepositoryRulesetTarget"
	},
	UpdateRepositoryWebCommitSignoffSettingInput:{

	},
	UpdateSponsorshipPreferencesInput:{
		privacyLevel:"SponsorshipPrivacy"
	},
	UpdateSubscriptionInput:{
		state:"SubscriptionState"
	},
	UpdateTeamDiscussionCommentInput:{

	},
	UpdateTeamDiscussionInput:{

	},
	UpdateTeamReviewAssignmentInput:{
		algorithm:"TeamReviewAssignmentAlgorithm"
	},
	UpdateTeamsRepositoryInput:{
		permission:"RepositoryPermission"
	},
	UpdateTopicsInput:{

	},
	UpdateUserListInput:{

	},
	UpdateUserListsForItemInput:{

	},
	User:{
		anyPinnableItems:{
			type:"PinnableItemType"
		},
		avatarUrl:{

		},
		canReceiveOrganizationEmailsWhenNotificationsRestricted:{

		},
		commitComments:{

		},
		contributionsCollection:{
			from:"DateTime",
			to:"DateTime"
		},
		enterprises:{
			membershipType:"EnterpriseMembershipType",
			orderBy:"EnterpriseOrder"
		},
		followers:{

		},
		following:{

		},
		gist:{

		},
		gistComments:{

		},
		gists:{
			orderBy:"GistOrder",
			privacy:"GistPrivacy"
		},
		hovercard:{

		},
		isSponsoredBy:{

		},
		issueComments:{
			orderBy:"IssueCommentOrder"
		},
		issues:{
			filterBy:"IssueFilters",
			orderBy:"IssueOrder",
			states:"IssueState"
		},
		lifetimeReceivedSponsorshipValues:{
			orderBy:"SponsorAndLifetimeValueOrder"
		},
		lists:{

		},
		organization:{

		},
		organizationVerifiedDomainEmails:{

		},
		organizations:{
			orderBy:"OrganizationOrder"
		},
		packages:{
			orderBy:"PackageOrder",
			packageType:"PackageType"
		},
		pinnableItems:{
			types:"PinnableItemType"
		},
		pinnedItems:{
			types:"PinnableItemType"
		},
		project:{

		},
		projectV2:{

		},
		projects:{
			orderBy:"ProjectOrder",
			states:"ProjectState"
		},
		projectsV2:{
			minPermissionLevel:"ProjectV2PermissionLevel",
			orderBy:"ProjectV2Order"
		},
		publicKeys:{

		},
		pullRequests:{
			orderBy:"IssueOrder",
			states:"PullRequestState"
		},
		recentProjects:{

		},
		repositories:{
			affiliations:"RepositoryAffiliation",
			orderBy:"RepositoryOrder",
			ownerAffiliations:"RepositoryAffiliation",
			privacy:"RepositoryPrivacy",
			visibility:"RepositoryVisibility"
		},
		repositoriesContributedTo:{
			contributionTypes:"RepositoryContributionType",
			orderBy:"RepositoryOrder",
			privacy:"RepositoryPrivacy"
		},
		repository:{

		},
		repositoryDiscussionComments:{

		},
		repositoryDiscussions:{
			orderBy:"DiscussionOrder",
			states:"DiscussionState"
		},
		savedReplies:{
			orderBy:"SavedReplyOrder"
		},
		socialAccounts:{

		},
		sponsoring:{
			orderBy:"SponsorOrder"
		},
		sponsors:{
			orderBy:"SponsorOrder"
		},
		sponsorsActivities:{
			actions:"SponsorsActivityAction",
			orderBy:"SponsorsActivityOrder",
			period:"SponsorsActivityPeriod",
			since:"DateTime",
			until:"DateTime"
		},
		sponsorshipForViewerAsSponsor:{

		},
		sponsorshipForViewerAsSponsorable:{

		},
		sponsorshipNewsletters:{
			orderBy:"SponsorshipNewsletterOrder"
		},
		sponsorshipsAsMaintainer:{
			orderBy:"SponsorshipOrder"
		},
		sponsorshipsAsSponsor:{
			orderBy:"SponsorshipOrder"
		},
		starredRepositories:{
			orderBy:"StarOrder"
		},
		topRepositories:{
			orderBy:"RepositoryOrder",
			since:"DateTime"
		},
		totalSponsorshipAmountAsSponsorInCents:{
			since:"DateTime",
			until:"DateTime"
		},
		watching:{
			affiliations:"RepositoryAffiliation",
			orderBy:"RepositoryOrder",
			ownerAffiliations:"RepositoryAffiliation",
			privacy:"RepositoryPrivacy",
			visibility:"RepositoryVisibility"
		}
	},
	UserBlockDuration: "enum" as const,
	UserList:{
		items:{

		}
	},
	UserStatusOrder:{
		direction:"OrderDirection",
		field:"UserStatusOrderField"
	},
	UserStatusOrderField: "enum" as const,
	UserViewType: "enum" as const,
	VerifiableDomainOrder:{
		direction:"OrderDirection",
		field:"VerifiableDomainOrderField"
	},
	VerifiableDomainOrderField: "enum" as const,
	VerifyVerifiableDomainInput:{

	},
	Workflow:{
		runs:{
			orderBy:"WorkflowRunOrder"
		}
	},
	WorkflowFileReferenceInput:{

	},
	WorkflowRun:{
		deploymentReviews:{

		},
		pendingDeploymentRequests:{

		}
	},
	WorkflowRunOrder:{
		direction:"OrderDirection",
		field:"WorkflowRunOrderField"
	},
	WorkflowRunOrderField: "enum" as const,
	WorkflowState: "enum" as const,
	WorkflowsParametersInput:{
		workflows:"WorkflowFileReferenceInput"
	},
	X509Certificate: `scalar.X509Certificate` as const
}

export const ReturnTypes: Record<string,any> = {
	requiredCapabilities:{
		requiredCapabilities:"String"
	},
	preview:{
		toggledBy:"String"
	},
	possibleTypes:{
		abstractType:"String",
		concreteTypes:"String"
	},
	AbortQueuedMigrationsPayload:{
		clientMutationId:"String",
		success:"Boolean"
	},
	AbortRepositoryMigrationPayload:{
		clientMutationId:"String",
		success:"Boolean"
	},
	AcceptEnterpriseAdministratorInvitationPayload:{
		clientMutationId:"String",
		invitation:"EnterpriseAdministratorInvitation",
		message:"String"
	},
	AcceptEnterpriseMemberInvitationPayload:{
		clientMutationId:"String",
		invitation:"EnterpriseMemberInvitation",
		message:"String"
	},
	AcceptTopicSuggestionPayload:{
		clientMutationId:"String",
		topic:"Topic"
	},
	Actor:{
		"...on Bot": "Bot",
		"...on EnterpriseUserAccount": "EnterpriseUserAccount",
		"...on Mannequin": "Mannequin",
		"...on Organization": "Organization",
		"...on User": "User",
		avatarUrl:"URI",
		login:"String",
		resourcePath:"URI",
		url:"URI"
	},
	ActorLocation:{
		city:"String",
		country:"String",
		countryCode:"String",
		region:"String",
		regionCode:"String"
	},
	AddAssigneesToAssignablePayload:{
		assignable:"Assignable",
		clientMutationId:"String"
	},
	AddCommentPayload:{
		clientMutationId:"String",
		commentEdge:"IssueCommentEdge",
		subject:"Node",
		timelineEdge:"IssueTimelineItemEdge"
	},
	AddDiscussionCommentPayload:{
		clientMutationId:"String",
		comment:"DiscussionComment"
	},
	AddDiscussionPollVotePayload:{
		clientMutationId:"String",
		pollOption:"DiscussionPollOption"
	},
	AddEnterpriseOrganizationMemberPayload:{
		clientMutationId:"String",
		users:"User"
	},
	AddEnterpriseSupportEntitlementPayload:{
		clientMutationId:"String",
		message:"String"
	},
	AddLabelsToLabelablePayload:{
		clientMutationId:"String",
		labelable:"Labelable"
	},
	AddProjectCardPayload:{
		cardEdge:"ProjectCardEdge",
		clientMutationId:"String",
		projectColumn:"ProjectColumn"
	},
	AddProjectColumnPayload:{
		clientMutationId:"String",
		columnEdge:"ProjectColumnEdge",
		project:"Project"
	},
	AddProjectV2DraftIssuePayload:{
		clientMutationId:"String",
		projectItem:"ProjectV2Item"
	},
	AddProjectV2ItemByIdPayload:{
		clientMutationId:"String",
		item:"ProjectV2Item"
	},
	AddPullRequestReviewCommentPayload:{
		clientMutationId:"String",
		comment:"PullRequestReviewComment",
		commentEdge:"PullRequestReviewCommentEdge"
	},
	AddPullRequestReviewPayload:{
		clientMutationId:"String",
		pullRequestReview:"PullRequestReview",
		reviewEdge:"PullRequestReviewEdge"
	},
	AddPullRequestReviewThreadPayload:{
		clientMutationId:"String",
		thread:"PullRequestReviewThread"
	},
	AddPullRequestReviewThreadReplyPayload:{
		clientMutationId:"String",
		comment:"PullRequestReviewComment"
	},
	AddReactionPayload:{
		clientMutationId:"String",
		reaction:"Reaction",
		reactionGroups:"ReactionGroup",
		subject:"Reactable"
	},
	AddStarPayload:{
		clientMutationId:"String",
		starrable:"Starrable"
	},
	AddSubIssuePayload:{
		clientMutationId:"String",
		issue:"Issue",
		subIssue:"Issue"
	},
	AddUpvotePayload:{
		clientMutationId:"String",
		subject:"Votable"
	},
	AddVerifiableDomainPayload:{
		clientMutationId:"String",
		domain:"VerifiableDomain"
	},
	AddedToMergeQueueEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		enqueuer:"User",
		id:"ID",
		mergeQueue:"MergeQueue",
		pullRequest:"PullRequest"
	},
	AddedToProjectEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		databaseId:"Int",
		id:"ID",
		project:"Project",
		projectCard:"ProjectCard",
		projectColumnName:"String"
	},
	AnnouncementBannerI:{
		"...on Enterprise": "Enterprise",
		"...on Organization": "Organization",
		announcement:"String",
		announcementCreatedAt:"DateTime",
		announcementExpiresAt:"DateTime",
		announcementUserDismissible:"Boolean"
	},
	App:{
		clientId:"String",
		createdAt:"DateTime",
		databaseId:"Int",
		description:"String",
		id:"ID",
		ipAllowListEntries:"IpAllowListEntryConnection",
		logoBackgroundColor:"String",
		logoUrl:"URI",
		name:"String",
		slug:"String",
		updatedAt:"DateTime",
		url:"URI"
	},
	ApproveDeploymentsPayload:{
		clientMutationId:"String",
		deployments:"Deployment"
	},
	ApproveVerifiableDomainPayload:{
		clientMutationId:"String",
		domain:"VerifiableDomain"
	},
	ArchiveProjectV2ItemPayload:{
		clientMutationId:"String",
		item:"ProjectV2Item"
	},
	ArchiveRepositoryPayload:{
		clientMutationId:"String",
		repository:"Repository"
	},
	Assignable:{
		"...on Issue": "Issue",
		"...on PullRequest": "PullRequest",
		assignees:"UserConnection"
	},
	AssignedEvent:{
		actor:"Actor",
		assignable:"Assignable",
		assignee:"Assignee",
		createdAt:"DateTime",
		id:"ID",
		user:"User"
	},
	Assignee:{
		"...on Bot":"Bot",
		"...on Mannequin":"Mannequin",
		"...on Organization":"Organization",
		"...on User":"User"
	},
	AuditEntry:{
		"...on MembersCanDeleteReposClearAuditEntry": "MembersCanDeleteReposClearAuditEntry",
		"...on MembersCanDeleteReposDisableAuditEntry": "MembersCanDeleteReposDisableAuditEntry",
		"...on MembersCanDeleteReposEnableAuditEntry": "MembersCanDeleteReposEnableAuditEntry",
		"...on OauthApplicationCreateAuditEntry": "OauthApplicationCreateAuditEntry",
		"...on OrgAddBillingManagerAuditEntry": "OrgAddBillingManagerAuditEntry",
		"...on OrgAddMemberAuditEntry": "OrgAddMemberAuditEntry",
		"...on OrgBlockUserAuditEntry": "OrgBlockUserAuditEntry",
		"...on OrgConfigDisableCollaboratorsOnlyAuditEntry": "OrgConfigDisableCollaboratorsOnlyAuditEntry",
		"...on OrgConfigEnableCollaboratorsOnlyAuditEntry": "OrgConfigEnableCollaboratorsOnlyAuditEntry",
		"...on OrgCreateAuditEntry": "OrgCreateAuditEntry",
		"...on OrgDisableOauthAppRestrictionsAuditEntry": "OrgDisableOauthAppRestrictionsAuditEntry",
		"...on OrgDisableSamlAuditEntry": "OrgDisableSamlAuditEntry",
		"...on OrgDisableTwoFactorRequirementAuditEntry": "OrgDisableTwoFactorRequirementAuditEntry",
		"...on OrgEnableOauthAppRestrictionsAuditEntry": "OrgEnableOauthAppRestrictionsAuditEntry",
		"...on OrgEnableSamlAuditEntry": "OrgEnableSamlAuditEntry",
		"...on OrgEnableTwoFactorRequirementAuditEntry": "OrgEnableTwoFactorRequirementAuditEntry",
		"...on OrgInviteMemberAuditEntry": "OrgInviteMemberAuditEntry",
		"...on OrgInviteToBusinessAuditEntry": "OrgInviteToBusinessAuditEntry",
		"...on OrgOauthAppAccessApprovedAuditEntry": "OrgOauthAppAccessApprovedAuditEntry",
		"...on OrgOauthAppAccessBlockedAuditEntry": "OrgOauthAppAccessBlockedAuditEntry",
		"...on OrgOauthAppAccessDeniedAuditEntry": "OrgOauthAppAccessDeniedAuditEntry",
		"...on OrgOauthAppAccessRequestedAuditEntry": "OrgOauthAppAccessRequestedAuditEntry",
		"...on OrgOauthAppAccessUnblockedAuditEntry": "OrgOauthAppAccessUnblockedAuditEntry",
		"...on OrgRemoveBillingManagerAuditEntry": "OrgRemoveBillingManagerAuditEntry",
		"...on OrgRemoveMemberAuditEntry": "OrgRemoveMemberAuditEntry",
		"...on OrgRemoveOutsideCollaboratorAuditEntry": "OrgRemoveOutsideCollaboratorAuditEntry",
		"...on OrgRestoreMemberAuditEntry": "OrgRestoreMemberAuditEntry",
		"...on OrgUnblockUserAuditEntry": "OrgUnblockUserAuditEntry",
		"...on OrgUpdateDefaultRepositoryPermissionAuditEntry": "OrgUpdateDefaultRepositoryPermissionAuditEntry",
		"...on OrgUpdateMemberAuditEntry": "OrgUpdateMemberAuditEntry",
		"...on OrgUpdateMemberRepositoryCreationPermissionAuditEntry": "OrgUpdateMemberRepositoryCreationPermissionAuditEntry",
		"...on OrgUpdateMemberRepositoryInvitationPermissionAuditEntry": "OrgUpdateMemberRepositoryInvitationPermissionAuditEntry",
		"...on PrivateRepositoryForkingDisableAuditEntry": "PrivateRepositoryForkingDisableAuditEntry",
		"...on PrivateRepositoryForkingEnableAuditEntry": "PrivateRepositoryForkingEnableAuditEntry",
		"...on RepoAccessAuditEntry": "RepoAccessAuditEntry",
		"...on RepoAddMemberAuditEntry": "RepoAddMemberAuditEntry",
		"...on RepoAddTopicAuditEntry": "RepoAddTopicAuditEntry",
		"...on RepoArchivedAuditEntry": "RepoArchivedAuditEntry",
		"...on RepoChangeMergeSettingAuditEntry": "RepoChangeMergeSettingAuditEntry",
		"...on RepoConfigDisableAnonymousGitAccessAuditEntry": "RepoConfigDisableAnonymousGitAccessAuditEntry",
		"...on RepoConfigDisableCollaboratorsOnlyAuditEntry": "RepoConfigDisableCollaboratorsOnlyAuditEntry",
		"...on RepoConfigDisableContributorsOnlyAuditEntry": "RepoConfigDisableContributorsOnlyAuditEntry",
		"...on RepoConfigDisableSockpuppetDisallowedAuditEntry": "RepoConfigDisableSockpuppetDisallowedAuditEntry",
		"...on RepoConfigEnableAnonymousGitAccessAuditEntry": "RepoConfigEnableAnonymousGitAccessAuditEntry",
		"...on RepoConfigEnableCollaboratorsOnlyAuditEntry": "RepoConfigEnableCollaboratorsOnlyAuditEntry",
		"...on RepoConfigEnableContributorsOnlyAuditEntry": "RepoConfigEnableContributorsOnlyAuditEntry",
		"...on RepoConfigEnableSockpuppetDisallowedAuditEntry": "RepoConfigEnableSockpuppetDisallowedAuditEntry",
		"...on RepoConfigLockAnonymousGitAccessAuditEntry": "RepoConfigLockAnonymousGitAccessAuditEntry",
		"...on RepoConfigUnlockAnonymousGitAccessAuditEntry": "RepoConfigUnlockAnonymousGitAccessAuditEntry",
		"...on RepoCreateAuditEntry": "RepoCreateAuditEntry",
		"...on RepoDestroyAuditEntry": "RepoDestroyAuditEntry",
		"...on RepoRemoveMemberAuditEntry": "RepoRemoveMemberAuditEntry",
		"...on RepoRemoveTopicAuditEntry": "RepoRemoveTopicAuditEntry",
		"...on RepositoryVisibilityChangeDisableAuditEntry": "RepositoryVisibilityChangeDisableAuditEntry",
		"...on RepositoryVisibilityChangeEnableAuditEntry": "RepositoryVisibilityChangeEnableAuditEntry",
		"...on TeamAddMemberAuditEntry": "TeamAddMemberAuditEntry",
		"...on TeamAddRepositoryAuditEntry": "TeamAddRepositoryAuditEntry",
		"...on TeamChangeParentTeamAuditEntry": "TeamChangeParentTeamAuditEntry",
		"...on TeamRemoveMemberAuditEntry": "TeamRemoveMemberAuditEntry",
		"...on TeamRemoveRepositoryAuditEntry": "TeamRemoveRepositoryAuditEntry",
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		operationType:"OperationType",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	AuditEntryActor:{
		"...on Bot":"Bot",
		"...on Organization":"Organization",
		"...on User":"User"
	},
	AutoMergeDisabledEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		disabler:"User",
		id:"ID",
		pullRequest:"PullRequest",
		reason:"String",
		reasonCode:"String"
	},
	AutoMergeEnabledEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		enabler:"User",
		id:"ID",
		pullRequest:"PullRequest"
	},
	AutoMergeRequest:{
		authorEmail:"String",
		commitBody:"String",
		commitHeadline:"String",
		enabledAt:"DateTime",
		enabledBy:"Actor",
		mergeMethod:"PullRequestMergeMethod",
		pullRequest:"PullRequest"
	},
	AutoRebaseEnabledEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		enabler:"User",
		id:"ID",
		pullRequest:"PullRequest"
	},
	AutoSquashEnabledEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		enabler:"User",
		id:"ID",
		pullRequest:"PullRequest"
	},
	AutomaticBaseChangeFailedEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		id:"ID",
		newBase:"String",
		oldBase:"String",
		pullRequest:"PullRequest"
	},
	AutomaticBaseChangeSucceededEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		id:"ID",
		newBase:"String",
		oldBase:"String",
		pullRequest:"PullRequest"
	},
	Base64String: `scalar.Base64String` as const,
	BaseRefChangedEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		currentRefName:"String",
		databaseId:"Int",
		id:"ID",
		previousRefName:"String",
		pullRequest:"PullRequest"
	},
	BaseRefDeletedEvent:{
		actor:"Actor",
		baseRefName:"String",
		createdAt:"DateTime",
		id:"ID",
		pullRequest:"PullRequest"
	},
	BaseRefForcePushedEvent:{
		actor:"Actor",
		afterCommit:"Commit",
		beforeCommit:"Commit",
		createdAt:"DateTime",
		id:"ID",
		pullRequest:"PullRequest",
		ref:"Ref"
	},
	BigInt: `scalar.BigInt` as const,
	Blame:{
		ranges:"BlameRange"
	},
	BlameRange:{
		age:"Int",
		commit:"Commit",
		endingLine:"Int",
		startingLine:"Int"
	},
	Blob:{
		abbreviatedOid:"String",
		byteSize:"Int",
		commitResourcePath:"URI",
		commitUrl:"URI",
		id:"ID",
		isBinary:"Boolean",
		isTruncated:"Boolean",
		oid:"GitObjectID",
		repository:"Repository",
		text:"String"
	},
	Bot:{
		avatarUrl:"URI",
		createdAt:"DateTime",
		databaseId:"Int",
		id:"ID",
		login:"String",
		resourcePath:"URI",
		updatedAt:"DateTime",
		url:"URI"
	},
	BranchActorAllowanceActor:{
		"...on App":"App",
		"...on Team":"Team",
		"...on User":"User"
	},
	BranchNamePatternParameters:{
		name:"String",
		negate:"Boolean",
		operator:"String",
		pattern:"String"
	},
	BranchProtectionRule:{
		allowsDeletions:"Boolean",
		allowsForcePushes:"Boolean",
		blocksCreations:"Boolean",
		branchProtectionRuleConflicts:"BranchProtectionRuleConflictConnection",
		bypassForcePushAllowances:"BypassForcePushAllowanceConnection",
		bypassPullRequestAllowances:"BypassPullRequestAllowanceConnection",
		creator:"Actor",
		databaseId:"Int",
		dismissesStaleReviews:"Boolean",
		id:"ID",
		isAdminEnforced:"Boolean",
		lockAllowsFetchAndMerge:"Boolean",
		lockBranch:"Boolean",
		matchingRefs:"RefConnection",
		pattern:"String",
		pushAllowances:"PushAllowanceConnection",
		repository:"Repository",
		requireLastPushApproval:"Boolean",
		requiredApprovingReviewCount:"Int",
		requiredDeploymentEnvironments:"String",
		requiredStatusCheckContexts:"String",
		requiredStatusChecks:"RequiredStatusCheckDescription",
		requiresApprovingReviews:"Boolean",
		requiresCodeOwnerReviews:"Boolean",
		requiresCommitSignatures:"Boolean",
		requiresConversationResolution:"Boolean",
		requiresDeployments:"Boolean",
		requiresLinearHistory:"Boolean",
		requiresStatusChecks:"Boolean",
		requiresStrictStatusChecks:"Boolean",
		restrictsPushes:"Boolean",
		restrictsReviewDismissals:"Boolean",
		reviewDismissalAllowances:"ReviewDismissalAllowanceConnection"
	},
	BranchProtectionRuleConflict:{
		branchProtectionRule:"BranchProtectionRule",
		conflictingBranchProtectionRule:"BranchProtectionRule",
		ref:"Ref"
	},
	BranchProtectionRuleConflictConnection:{
		edges:"BranchProtectionRuleConflictEdge",
		nodes:"BranchProtectionRuleConflict",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	BranchProtectionRuleConflictEdge:{
		cursor:"String",
		node:"BranchProtectionRuleConflict"
	},
	BranchProtectionRuleConnection:{
		edges:"BranchProtectionRuleEdge",
		nodes:"BranchProtectionRule",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	BranchProtectionRuleEdge:{
		cursor:"String",
		node:"BranchProtectionRule"
	},
	BypassActor:{
		"...on App":"App",
		"...on Team":"Team"
	},
	BypassForcePushAllowance:{
		actor:"BranchActorAllowanceActor",
		branchProtectionRule:"BranchProtectionRule",
		id:"ID"
	},
	BypassForcePushAllowanceConnection:{
		edges:"BypassForcePushAllowanceEdge",
		nodes:"BypassForcePushAllowance",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	BypassForcePushAllowanceEdge:{
		cursor:"String",
		node:"BypassForcePushAllowance"
	},
	BypassPullRequestAllowance:{
		actor:"BranchActorAllowanceActor",
		branchProtectionRule:"BranchProtectionRule",
		id:"ID"
	},
	BypassPullRequestAllowanceConnection:{
		edges:"BypassPullRequestAllowanceEdge",
		nodes:"BypassPullRequestAllowance",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	BypassPullRequestAllowanceEdge:{
		cursor:"String",
		node:"BypassPullRequestAllowance"
	},
	CVSS:{
		score:"Float",
		vectorString:"String"
	},
	CWE:{
		cweId:"String",
		description:"String",
		id:"ID",
		name:"String"
	},
	CWEConnection:{
		edges:"CWEEdge",
		nodes:"CWE",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	CWEEdge:{
		cursor:"String",
		node:"CWE"
	},
	CancelEnterpriseAdminInvitationPayload:{
		clientMutationId:"String",
		invitation:"EnterpriseAdministratorInvitation",
		message:"String"
	},
	CancelEnterpriseMemberInvitationPayload:{
		clientMutationId:"String",
		invitation:"EnterpriseMemberInvitation",
		message:"String"
	},
	CancelSponsorshipPayload:{
		clientMutationId:"String",
		sponsorsTier:"SponsorsTier"
	},
	ChangeUserStatusPayload:{
		clientMutationId:"String",
		status:"UserStatus"
	},
	CheckAnnotation:{
		annotationLevel:"CheckAnnotationLevel",
		blobUrl:"URI",
		databaseId:"Int",
		location:"CheckAnnotationSpan",
		message:"String",
		path:"String",
		rawDetails:"String",
		title:"String"
	},
	CheckAnnotationConnection:{
		edges:"CheckAnnotationEdge",
		nodes:"CheckAnnotation",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	CheckAnnotationEdge:{
		cursor:"String",
		node:"CheckAnnotation"
	},
	CheckAnnotationPosition:{
		column:"Int",
		line:"Int"
	},
	CheckAnnotationSpan:{
		end:"CheckAnnotationPosition",
		start:"CheckAnnotationPosition"
	},
	CheckRun:{
		annotations:"CheckAnnotationConnection",
		checkSuite:"CheckSuite",
		completedAt:"DateTime",
		conclusion:"CheckConclusionState",
		databaseId:"Int",
		deployment:"Deployment",
		detailsUrl:"URI",
		externalId:"String",
		id:"ID",
		isRequired:"Boolean",
		name:"String",
		pendingDeploymentRequest:"DeploymentRequest",
		permalink:"URI",
		repository:"Repository",
		resourcePath:"URI",
		startedAt:"DateTime",
		status:"CheckStatusState",
		steps:"CheckStepConnection",
		summary:"String",
		text:"String",
		title:"String",
		url:"URI"
	},
	CheckRunConnection:{
		edges:"CheckRunEdge",
		nodes:"CheckRun",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	CheckRunEdge:{
		cursor:"String",
		node:"CheckRun"
	},
	CheckRunStateCount:{
		count:"Int",
		state:"CheckRunState"
	},
	CheckStep:{
		completedAt:"DateTime",
		conclusion:"CheckConclusionState",
		externalId:"String",
		name:"String",
		number:"Int",
		secondsToCompletion:"Int",
		startedAt:"DateTime",
		status:"CheckStatusState"
	},
	CheckStepConnection:{
		edges:"CheckStepEdge",
		nodes:"CheckStep",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	CheckStepEdge:{
		cursor:"String",
		node:"CheckStep"
	},
	CheckSuite:{
		app:"App",
		branch:"Ref",
		checkRuns:"CheckRunConnection",
		commit:"Commit",
		conclusion:"CheckConclusionState",
		createdAt:"DateTime",
		creator:"User",
		databaseId:"Int",
		id:"ID",
		matchingPullRequests:"PullRequestConnection",
		push:"Push",
		repository:"Repository",
		resourcePath:"URI",
		status:"CheckStatusState",
		updatedAt:"DateTime",
		url:"URI",
		workflowRun:"WorkflowRun"
	},
	CheckSuiteConnection:{
		edges:"CheckSuiteEdge",
		nodes:"CheckSuite",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	CheckSuiteEdge:{
		cursor:"String",
		node:"CheckSuite"
	},
	Claimable:{
		"...on Mannequin":"Mannequin",
		"...on User":"User"
	},
	ClearLabelsFromLabelablePayload:{
		clientMutationId:"String",
		labelable:"Labelable"
	},
	ClearProjectV2ItemFieldValuePayload:{
		clientMutationId:"String",
		projectV2Item:"ProjectV2Item"
	},
	CloneProjectPayload:{
		clientMutationId:"String",
		jobStatusId:"String",
		project:"Project"
	},
	CloneTemplateRepositoryPayload:{
		clientMutationId:"String",
		repository:"Repository"
	},
	Closable:{
		"...on Discussion": "Discussion",
		"...on Issue": "Issue",
		"...on Milestone": "Milestone",
		"...on Project": "Project",
		"...on ProjectV2": "ProjectV2",
		"...on PullRequest": "PullRequest",
		closed:"Boolean",
		closedAt:"DateTime",
		viewerCanClose:"Boolean",
		viewerCanReopen:"Boolean"
	},
	CloseDiscussionPayload:{
		clientMutationId:"String",
		discussion:"Discussion"
	},
	CloseIssuePayload:{
		clientMutationId:"String",
		issue:"Issue"
	},
	ClosePullRequestPayload:{
		clientMutationId:"String",
		pullRequest:"PullRequest"
	},
	ClosedEvent:{
		actor:"Actor",
		closable:"Closable",
		closer:"Closer",
		createdAt:"DateTime",
		id:"ID",
		resourcePath:"URI",
		stateReason:"IssueStateReason",
		url:"URI"
	},
	Closer:{
		"...on Commit":"Commit",
		"...on ProjectV2":"ProjectV2",
		"...on PullRequest":"PullRequest"
	},
	CodeOfConduct:{
		body:"String",
		id:"ID",
		key:"String",
		name:"String",
		resourcePath:"URI",
		url:"URI"
	},
	CodeScanningParameters:{
		codeScanningTools:"CodeScanningTool"
	},
	CodeScanningTool:{
		alertsThreshold:"String",
		securityAlertsThreshold:"String",
		tool:"String"
	},
	Comment:{
		"...on CommitComment": "CommitComment",
		"...on Discussion": "Discussion",
		"...on DiscussionComment": "DiscussionComment",
		"...on GistComment": "GistComment",
		"...on Issue": "Issue",
		"...on IssueComment": "IssueComment",
		"...on PullRequest": "PullRequest",
		"...on PullRequestReview": "PullRequestReview",
		"...on PullRequestReviewComment": "PullRequestReviewComment",
		"...on TeamDiscussion": "TeamDiscussion",
		"...on TeamDiscussionComment": "TeamDiscussionComment",
		author:"Actor",
		authorAssociation:"CommentAuthorAssociation",
		body:"String",
		bodyHTML:"HTML",
		bodyText:"String",
		createdAt:"DateTime",
		createdViaEmail:"Boolean",
		editor:"Actor",
		id:"ID",
		includesCreatedEdit:"Boolean",
		lastEditedAt:"DateTime",
		publishedAt:"DateTime",
		updatedAt:"DateTime",
		userContentEdits:"UserContentEditConnection",
		viewerDidAuthor:"Boolean"
	},
	CommentDeletedEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		databaseId:"Int",
		deletedCommentAuthor:"Actor",
		id:"ID"
	},
	Commit:{
		abbreviatedOid:"String",
		additions:"Int",
		associatedPullRequests:"PullRequestConnection",
		author:"GitActor",
		authoredByCommitter:"Boolean",
		authoredDate:"DateTime",
		authors:"GitActorConnection",
		blame:"Blame",
		changedFiles:"Int",
		changedFilesIfAvailable:"Int",
		checkSuites:"CheckSuiteConnection",
		comments:"CommitCommentConnection",
		commitResourcePath:"URI",
		commitUrl:"URI",
		committedDate:"DateTime",
		committedViaWeb:"Boolean",
		committer:"GitActor",
		deletions:"Int",
		deployments:"DeploymentConnection",
		file:"TreeEntry",
		history:"CommitHistoryConnection",
		id:"ID",
		message:"String",
		messageBody:"String",
		messageBodyHTML:"HTML",
		messageHeadline:"String",
		messageHeadlineHTML:"HTML",
		oid:"GitObjectID",
		onBehalfOf:"Organization",
		parents:"CommitConnection",
		pushedDate:"DateTime",
		repository:"Repository",
		resourcePath:"URI",
		signature:"GitSignature",
		status:"Status",
		statusCheckRollup:"StatusCheckRollup",
		submodules:"SubmoduleConnection",
		tarballUrl:"URI",
		tree:"Tree",
		treeResourcePath:"URI",
		treeUrl:"URI",
		url:"URI",
		viewerCanSubscribe:"Boolean",
		viewerSubscription:"SubscriptionState",
		zipballUrl:"URI"
	},
	CommitAuthorEmailPatternParameters:{
		name:"String",
		negate:"Boolean",
		operator:"String",
		pattern:"String"
	},
	CommitComment:{
		author:"Actor",
		authorAssociation:"CommentAuthorAssociation",
		body:"String",
		bodyHTML:"HTML",
		bodyText:"String",
		commit:"Commit",
		createdAt:"DateTime",
		createdViaEmail:"Boolean",
		databaseId:"Int",
		editor:"Actor",
		id:"ID",
		includesCreatedEdit:"Boolean",
		isMinimized:"Boolean",
		lastEditedAt:"DateTime",
		minimizedReason:"String",
		path:"String",
		position:"Int",
		publishedAt:"DateTime",
		reactionGroups:"ReactionGroup",
		reactions:"ReactionConnection",
		repository:"Repository",
		resourcePath:"URI",
		updatedAt:"DateTime",
		url:"URI",
		userContentEdits:"UserContentEditConnection",
		viewerCanDelete:"Boolean",
		viewerCanMinimize:"Boolean",
		viewerCanReact:"Boolean",
		viewerCanUpdate:"Boolean",
		viewerCannotUpdateReasons:"CommentCannotUpdateReason",
		viewerDidAuthor:"Boolean"
	},
	CommitCommentConnection:{
		edges:"CommitCommentEdge",
		nodes:"CommitComment",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	CommitCommentEdge:{
		cursor:"String",
		node:"CommitComment"
	},
	CommitCommentThread:{
		comments:"CommitCommentConnection",
		commit:"Commit",
		id:"ID",
		path:"String",
		position:"Int",
		repository:"Repository"
	},
	CommitConnection:{
		edges:"CommitEdge",
		nodes:"Commit",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	CommitContributionsByRepository:{
		contributions:"CreatedCommitContributionConnection",
		repository:"Repository",
		resourcePath:"URI",
		url:"URI"
	},
	CommitEdge:{
		cursor:"String",
		node:"Commit"
	},
	CommitHistoryConnection:{
		edges:"CommitEdge",
		nodes:"Commit",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	CommitMessagePatternParameters:{
		name:"String",
		negate:"Boolean",
		operator:"String",
		pattern:"String"
	},
	CommitterEmailPatternParameters:{
		name:"String",
		negate:"Boolean",
		operator:"String",
		pattern:"String"
	},
	Comparison:{
		aheadBy:"Int",
		baseTarget:"GitObject",
		behindBy:"Int",
		commits:"ComparisonCommitConnection",
		headTarget:"GitObject",
		id:"ID",
		status:"ComparisonStatus"
	},
	ComparisonCommitConnection:{
		authorCount:"Int",
		edges:"CommitEdge",
		nodes:"Commit",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	ConnectedEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		id:"ID",
		isCrossRepository:"Boolean",
		source:"ReferencedSubject",
		subject:"ReferencedSubject"
	},
	ContributingGuidelines:{
		body:"String",
		resourcePath:"URI",
		url:"URI"
	},
	Contribution:{
		"...on CreatedCommitContribution": "CreatedCommitContribution",
		"...on CreatedIssueContribution": "CreatedIssueContribution",
		"...on CreatedPullRequestContribution": "CreatedPullRequestContribution",
		"...on CreatedPullRequestReviewContribution": "CreatedPullRequestReviewContribution",
		"...on CreatedRepositoryContribution": "CreatedRepositoryContribution",
		"...on JoinedGitHubContribution": "JoinedGitHubContribution",
		"...on RestrictedContribution": "RestrictedContribution",
		isRestricted:"Boolean",
		occurredAt:"DateTime",
		resourcePath:"URI",
		url:"URI",
		user:"User"
	},
	ContributionCalendar:{
		colors:"String",
		isHalloween:"Boolean",
		months:"ContributionCalendarMonth",
		totalContributions:"Int",
		weeks:"ContributionCalendarWeek"
	},
	ContributionCalendarDay:{
		color:"String",
		contributionCount:"Int",
		contributionLevel:"ContributionLevel",
		date:"Date",
		weekday:"Int"
	},
	ContributionCalendarMonth:{
		firstDay:"Date",
		name:"String",
		totalWeeks:"Int",
		year:"Int"
	},
	ContributionCalendarWeek:{
		contributionDays:"ContributionCalendarDay",
		firstDay:"Date"
	},
	ContributionsCollection:{
		commitContributionsByRepository:"CommitContributionsByRepository",
		contributionCalendar:"ContributionCalendar",
		contributionYears:"Int",
		doesEndInCurrentMonth:"Boolean",
		earliestRestrictedContributionDate:"Date",
		endedAt:"DateTime",
		firstIssueContribution:"CreatedIssueOrRestrictedContribution",
		firstPullRequestContribution:"CreatedPullRequestOrRestrictedContribution",
		firstRepositoryContribution:"CreatedRepositoryOrRestrictedContribution",
		hasActivityInThePast:"Boolean",
		hasAnyContributions:"Boolean",
		hasAnyRestrictedContributions:"Boolean",
		isSingleDay:"Boolean",
		issueContributions:"CreatedIssueContributionConnection",
		issueContributionsByRepository:"IssueContributionsByRepository",
		joinedGitHubContribution:"JoinedGitHubContribution",
		latestRestrictedContributionDate:"Date",
		mostRecentCollectionWithActivity:"ContributionsCollection",
		mostRecentCollectionWithoutActivity:"ContributionsCollection",
		popularIssueContribution:"CreatedIssueContribution",
		popularPullRequestContribution:"CreatedPullRequestContribution",
		pullRequestContributions:"CreatedPullRequestContributionConnection",
		pullRequestContributionsByRepository:"PullRequestContributionsByRepository",
		pullRequestReviewContributions:"CreatedPullRequestReviewContributionConnection",
		pullRequestReviewContributionsByRepository:"PullRequestReviewContributionsByRepository",
		repositoryContributions:"CreatedRepositoryContributionConnection",
		restrictedContributionsCount:"Int",
		startedAt:"DateTime",
		totalCommitContributions:"Int",
		totalIssueContributions:"Int",
		totalPullRequestContributions:"Int",
		totalPullRequestReviewContributions:"Int",
		totalRepositoriesWithContributedCommits:"Int",
		totalRepositoriesWithContributedIssues:"Int",
		totalRepositoriesWithContributedPullRequestReviews:"Int",
		totalRepositoriesWithContributedPullRequests:"Int",
		totalRepositoryContributions:"Int",
		user:"User"
	},
	ConvertProjectCardNoteToIssuePayload:{
		clientMutationId:"String",
		projectCard:"ProjectCard"
	},
	ConvertProjectV2DraftIssueItemToIssuePayload:{
		clientMutationId:"String",
		item:"ProjectV2Item"
	},
	ConvertPullRequestToDraftPayload:{
		clientMutationId:"String",
		pullRequest:"PullRequest"
	},
	ConvertToDraftEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		id:"ID",
		pullRequest:"PullRequest",
		resourcePath:"URI",
		url:"URI"
	},
	ConvertedNoteToIssueEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		databaseId:"Int",
		id:"ID",
		project:"Project",
		projectCard:"ProjectCard",
		projectColumnName:"String"
	},
	ConvertedToDiscussionEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		discussion:"Discussion",
		id:"ID"
	},
	CopilotEndpoints:{
		api:"String",
		originTracker:"String",
		proxy:"String",
		telemetry:"String"
	},
	CopyProjectV2Payload:{
		clientMutationId:"String",
		projectV2:"ProjectV2"
	},
	CreateAttributionInvitationPayload:{
		clientMutationId:"String",
		owner:"Organization",
		source:"Claimable",
		target:"Claimable"
	},
	CreateBranchProtectionRulePayload:{
		branchProtectionRule:"BranchProtectionRule",
		clientMutationId:"String"
	},
	CreateCheckRunPayload:{
		checkRun:"CheckRun",
		clientMutationId:"String"
	},
	CreateCheckSuitePayload:{
		checkSuite:"CheckSuite",
		clientMutationId:"String"
	},
	CreateCommitOnBranchPayload:{
		clientMutationId:"String",
		commit:"Commit",
		ref:"Ref"
	},
	CreateDeploymentPayload:{
		autoMerged:"Boolean",
		clientMutationId:"String",
		deployment:"Deployment"
	},
	CreateDeploymentStatusPayload:{
		clientMutationId:"String",
		deploymentStatus:"DeploymentStatus"
	},
	CreateDiscussionPayload:{
		clientMutationId:"String",
		discussion:"Discussion"
	},
	CreateEnterpriseOrganizationPayload:{
		clientMutationId:"String",
		enterprise:"Enterprise",
		organization:"Organization"
	},
	CreateEnvironmentPayload:{
		clientMutationId:"String",
		environment:"Environment"
	},
	CreateIpAllowListEntryPayload:{
		clientMutationId:"String",
		ipAllowListEntry:"IpAllowListEntry"
	},
	CreateIssuePayload:{
		clientMutationId:"String",
		issue:"Issue"
	},
	CreateLabelPayload:{
		clientMutationId:"String",
		label:"Label"
	},
	CreateLinkedBranchPayload:{
		clientMutationId:"String",
		issue:"Issue",
		linkedBranch:"LinkedBranch"
	},
	CreateMigrationSourcePayload:{
		clientMutationId:"String",
		migrationSource:"MigrationSource"
	},
	CreateProjectPayload:{
		clientMutationId:"String",
		project:"Project"
	},
	CreateProjectV2FieldPayload:{
		clientMutationId:"String",
		projectV2Field:"ProjectV2FieldConfiguration"
	},
	CreateProjectV2Payload:{
		clientMutationId:"String",
		projectV2:"ProjectV2"
	},
	CreateProjectV2StatusUpdatePayload:{
		clientMutationId:"String",
		statusUpdate:"ProjectV2StatusUpdate"
	},
	CreatePullRequestPayload:{
		clientMutationId:"String",
		pullRequest:"PullRequest"
	},
	CreateRefPayload:{
		clientMutationId:"String",
		ref:"Ref"
	},
	CreateRepositoryPayload:{
		clientMutationId:"String",
		repository:"Repository"
	},
	CreateRepositoryRulesetPayload:{
		clientMutationId:"String",
		ruleset:"RepositoryRuleset"
	},
	CreateSponsorsListingPayload:{
		clientMutationId:"String",
		sponsorsListing:"SponsorsListing"
	},
	CreateSponsorsTierPayload:{
		clientMutationId:"String",
		sponsorsTier:"SponsorsTier"
	},
	CreateSponsorshipPayload:{
		clientMutationId:"String",
		sponsorship:"Sponsorship"
	},
	CreateSponsorshipsPayload:{
		clientMutationId:"String",
		sponsorables:"Sponsorable"
	},
	CreateTeamDiscussionCommentPayload:{
		clientMutationId:"String",
		teamDiscussionComment:"TeamDiscussionComment"
	},
	CreateTeamDiscussionPayload:{
		clientMutationId:"String",
		teamDiscussion:"TeamDiscussion"
	},
	CreateUserListPayload:{
		clientMutationId:"String",
		list:"UserList",
		viewer:"User"
	},
	CreatedCommitContribution:{
		commitCount:"Int",
		isRestricted:"Boolean",
		occurredAt:"DateTime",
		repository:"Repository",
		resourcePath:"URI",
		url:"URI",
		user:"User"
	},
	CreatedCommitContributionConnection:{
		edges:"CreatedCommitContributionEdge",
		nodes:"CreatedCommitContribution",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	CreatedCommitContributionEdge:{
		cursor:"String",
		node:"CreatedCommitContribution"
	},
	CreatedIssueContribution:{
		isRestricted:"Boolean",
		issue:"Issue",
		occurredAt:"DateTime",
		resourcePath:"URI",
		url:"URI",
		user:"User"
	},
	CreatedIssueContributionConnection:{
		edges:"CreatedIssueContributionEdge",
		nodes:"CreatedIssueContribution",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	CreatedIssueContributionEdge:{
		cursor:"String",
		node:"CreatedIssueContribution"
	},
	CreatedIssueOrRestrictedContribution:{
		"...on CreatedIssueContribution":"CreatedIssueContribution",
		"...on RestrictedContribution":"RestrictedContribution"
	},
	CreatedPullRequestContribution:{
		isRestricted:"Boolean",
		occurredAt:"DateTime",
		pullRequest:"PullRequest",
		resourcePath:"URI",
		url:"URI",
		user:"User"
	},
	CreatedPullRequestContributionConnection:{
		edges:"CreatedPullRequestContributionEdge",
		nodes:"CreatedPullRequestContribution",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	CreatedPullRequestContributionEdge:{
		cursor:"String",
		node:"CreatedPullRequestContribution"
	},
	CreatedPullRequestOrRestrictedContribution:{
		"...on CreatedPullRequestContribution":"CreatedPullRequestContribution",
		"...on RestrictedContribution":"RestrictedContribution"
	},
	CreatedPullRequestReviewContribution:{
		isRestricted:"Boolean",
		occurredAt:"DateTime",
		pullRequest:"PullRequest",
		pullRequestReview:"PullRequestReview",
		repository:"Repository",
		resourcePath:"URI",
		url:"URI",
		user:"User"
	},
	CreatedPullRequestReviewContributionConnection:{
		edges:"CreatedPullRequestReviewContributionEdge",
		nodes:"CreatedPullRequestReviewContribution",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	CreatedPullRequestReviewContributionEdge:{
		cursor:"String",
		node:"CreatedPullRequestReviewContribution"
	},
	CreatedRepositoryContribution:{
		isRestricted:"Boolean",
		occurredAt:"DateTime",
		repository:"Repository",
		resourcePath:"URI",
		url:"URI",
		user:"User"
	},
	CreatedRepositoryContributionConnection:{
		edges:"CreatedRepositoryContributionEdge",
		nodes:"CreatedRepositoryContribution",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	CreatedRepositoryContributionEdge:{
		cursor:"String",
		node:"CreatedRepositoryContribution"
	},
	CreatedRepositoryOrRestrictedContribution:{
		"...on CreatedRepositoryContribution":"CreatedRepositoryContribution",
		"...on RestrictedContribution":"RestrictedContribution"
	},
	CrossReferencedEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		id:"ID",
		isCrossRepository:"Boolean",
		referencedAt:"DateTime",
		resourcePath:"URI",
		source:"ReferencedSubject",
		target:"ReferencedSubject",
		url:"URI",
		willCloseTarget:"Boolean"
	},
	Date: `scalar.Date` as const,
	DateTime: `scalar.DateTime` as const,
	DeclineTopicSuggestionPayload:{
		clientMutationId:"String",
		topic:"Topic"
	},
	Deletable:{
		"...on CommitComment": "CommitComment",
		"...on Discussion": "Discussion",
		"...on DiscussionComment": "DiscussionComment",
		"...on GistComment": "GistComment",
		"...on Issue": "Issue",
		"...on IssueComment": "IssueComment",
		"...on PullRequestReview": "PullRequestReview",
		"...on PullRequestReviewComment": "PullRequestReviewComment",
		"...on TeamDiscussion": "TeamDiscussion",
		"...on TeamDiscussionComment": "TeamDiscussionComment",
		viewerCanDelete:"Boolean"
	},
	DeleteBranchProtectionRulePayload:{
		clientMutationId:"String"
	},
	DeleteDeploymentPayload:{
		clientMutationId:"String"
	},
	DeleteDiscussionCommentPayload:{
		clientMutationId:"String",
		comment:"DiscussionComment"
	},
	DeleteDiscussionPayload:{
		clientMutationId:"String",
		discussion:"Discussion"
	},
	DeleteEnvironmentPayload:{
		clientMutationId:"String"
	},
	DeleteIpAllowListEntryPayload:{
		clientMutationId:"String",
		ipAllowListEntry:"IpAllowListEntry"
	},
	DeleteIssueCommentPayload:{
		clientMutationId:"String"
	},
	DeleteIssuePayload:{
		clientMutationId:"String",
		repository:"Repository"
	},
	DeleteLabelPayload:{
		clientMutationId:"String"
	},
	DeleteLinkedBranchPayload:{
		clientMutationId:"String",
		issue:"Issue"
	},
	DeletePackageVersionPayload:{
		clientMutationId:"String",
		success:"Boolean"
	},
	DeleteProjectCardPayload:{
		clientMutationId:"String",
		column:"ProjectColumn",
		deletedCardId:"ID"
	},
	DeleteProjectColumnPayload:{
		clientMutationId:"String",
		deletedColumnId:"ID",
		project:"Project"
	},
	DeleteProjectPayload:{
		clientMutationId:"String",
		owner:"ProjectOwner"
	},
	DeleteProjectV2FieldPayload:{
		clientMutationId:"String",
		projectV2Field:"ProjectV2FieldConfiguration"
	},
	DeleteProjectV2ItemPayload:{
		clientMutationId:"String",
		deletedItemId:"ID"
	},
	DeleteProjectV2Payload:{
		clientMutationId:"String",
		projectV2:"ProjectV2"
	},
	DeleteProjectV2StatusUpdatePayload:{
		clientMutationId:"String",
		deletedStatusUpdateId:"ID",
		projectV2:"ProjectV2"
	},
	DeleteProjectV2WorkflowPayload:{
		clientMutationId:"String",
		deletedWorkflowId:"ID",
		projectV2:"ProjectV2"
	},
	DeletePullRequestReviewCommentPayload:{
		clientMutationId:"String",
		pullRequestReview:"PullRequestReview",
		pullRequestReviewComment:"PullRequestReviewComment"
	},
	DeletePullRequestReviewPayload:{
		clientMutationId:"String",
		pullRequestReview:"PullRequestReview"
	},
	DeleteRefPayload:{
		clientMutationId:"String"
	},
	DeleteRepositoryRulesetPayload:{
		clientMutationId:"String"
	},
	DeleteTeamDiscussionCommentPayload:{
		clientMutationId:"String"
	},
	DeleteTeamDiscussionPayload:{
		clientMutationId:"String"
	},
	DeleteUserListPayload:{
		clientMutationId:"String",
		user:"User"
	},
	DeleteVerifiableDomainPayload:{
		clientMutationId:"String",
		owner:"VerifiableDomainOwner"
	},
	DemilestonedEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		id:"ID",
		milestoneTitle:"String",
		subject:"MilestoneItem"
	},
	DependabotUpdate:{
		error:"DependabotUpdateError",
		pullRequest:"PullRequest",
		repository:"Repository"
	},
	DependabotUpdateError:{
		body:"String",
		errorType:"String",
		title:"String"
	},
	DependencyGraphDependency:{
		hasDependencies:"Boolean",
		packageLabel:"String",
		packageManager:"String",
		packageName:"String",
		repository:"Repository",
		requirements:"String"
	},
	DependencyGraphDependencyConnection:{
		edges:"DependencyGraphDependencyEdge",
		nodes:"DependencyGraphDependency",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	DependencyGraphDependencyEdge:{
		cursor:"String",
		node:"DependencyGraphDependency"
	},
	DependencyGraphManifest:{
		blobPath:"String",
		dependencies:"DependencyGraphDependencyConnection",
		dependenciesCount:"Int",
		exceedsMaxSize:"Boolean",
		filename:"String",
		id:"ID",
		parseable:"Boolean",
		repository:"Repository"
	},
	DependencyGraphManifestConnection:{
		edges:"DependencyGraphManifestEdge",
		nodes:"DependencyGraphManifest",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	DependencyGraphManifestEdge:{
		cursor:"String",
		node:"DependencyGraphManifest"
	},
	DeployKey:{
		createdAt:"DateTime",
		enabled:"Boolean",
		id:"ID",
		key:"String",
		readOnly:"Boolean",
		title:"String",
		verified:"Boolean"
	},
	DeployKeyConnection:{
		edges:"DeployKeyEdge",
		nodes:"DeployKey",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	DeployKeyEdge:{
		cursor:"String",
		node:"DeployKey"
	},
	DeployedEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		databaseId:"Int",
		deployment:"Deployment",
		id:"ID",
		pullRequest:"PullRequest",
		ref:"Ref"
	},
	Deployment:{
		commit:"Commit",
		commitOid:"String",
		createdAt:"DateTime",
		creator:"Actor",
		databaseId:"Int",
		description:"String",
		environment:"String",
		id:"ID",
		latestEnvironment:"String",
		latestStatus:"DeploymentStatus",
		originalEnvironment:"String",
		payload:"String",
		ref:"Ref",
		repository:"Repository",
		state:"DeploymentState",
		statuses:"DeploymentStatusConnection",
		task:"String",
		updatedAt:"DateTime"
	},
	DeploymentConnection:{
		edges:"DeploymentEdge",
		nodes:"Deployment",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	DeploymentEdge:{
		cursor:"String",
		node:"Deployment"
	},
	DeploymentEnvironmentChangedEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		deploymentStatus:"DeploymentStatus",
		id:"ID",
		pullRequest:"PullRequest"
	},
	DeploymentProtectionRule:{
		databaseId:"Int",
		preventSelfReview:"Boolean",
		reviewers:"DeploymentReviewerConnection",
		timeout:"Int",
		type:"DeploymentProtectionRuleType"
	},
	DeploymentProtectionRuleConnection:{
		edges:"DeploymentProtectionRuleEdge",
		nodes:"DeploymentProtectionRule",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	DeploymentProtectionRuleEdge:{
		cursor:"String",
		node:"DeploymentProtectionRule"
	},
	DeploymentRequest:{
		currentUserCanApprove:"Boolean",
		environment:"Environment",
		reviewers:"DeploymentReviewerConnection",
		waitTimer:"Int",
		waitTimerStartedAt:"DateTime"
	},
	DeploymentRequestConnection:{
		edges:"DeploymentRequestEdge",
		nodes:"DeploymentRequest",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	DeploymentRequestEdge:{
		cursor:"String",
		node:"DeploymentRequest"
	},
	DeploymentReview:{
		comment:"String",
		databaseId:"Int",
		environments:"EnvironmentConnection",
		id:"ID",
		state:"DeploymentReviewState",
		user:"User"
	},
	DeploymentReviewConnection:{
		edges:"DeploymentReviewEdge",
		nodes:"DeploymentReview",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	DeploymentReviewEdge:{
		cursor:"String",
		node:"DeploymentReview"
	},
	DeploymentReviewer:{
		"...on Team":"Team",
		"...on User":"User"
	},
	DeploymentReviewerConnection:{
		edges:"DeploymentReviewerEdge",
		nodes:"DeploymentReviewer",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	DeploymentReviewerEdge:{
		cursor:"String",
		node:"DeploymentReviewer"
	},
	DeploymentStatus:{
		createdAt:"DateTime",
		creator:"Actor",
		deployment:"Deployment",
		description:"String",
		environment:"String",
		environmentUrl:"URI",
		id:"ID",
		logUrl:"URI",
		state:"DeploymentStatusState",
		updatedAt:"DateTime"
	},
	DeploymentStatusConnection:{
		edges:"DeploymentStatusEdge",
		nodes:"DeploymentStatus",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	DeploymentStatusEdge:{
		cursor:"String",
		node:"DeploymentStatus"
	},
	DequeuePullRequestPayload:{
		clientMutationId:"String",
		mergeQueueEntry:"MergeQueueEntry"
	},
	DisablePullRequestAutoMergePayload:{
		actor:"Actor",
		clientMutationId:"String",
		pullRequest:"PullRequest"
	},
	DisconnectedEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		id:"ID",
		isCrossRepository:"Boolean",
		source:"ReferencedSubject",
		subject:"ReferencedSubject"
	},
	Discussion:{
		activeLockReason:"LockReason",
		answer:"DiscussionComment",
		answerChosenAt:"DateTime",
		answerChosenBy:"Actor",
		author:"Actor",
		authorAssociation:"CommentAuthorAssociation",
		body:"String",
		bodyHTML:"HTML",
		bodyText:"String",
		category:"DiscussionCategory",
		closed:"Boolean",
		closedAt:"DateTime",
		comments:"DiscussionCommentConnection",
		createdAt:"DateTime",
		createdViaEmail:"Boolean",
		databaseId:"Int",
		editor:"Actor",
		id:"ID",
		includesCreatedEdit:"Boolean",
		isAnswered:"Boolean",
		labels:"LabelConnection",
		lastEditedAt:"DateTime",
		locked:"Boolean",
		number:"Int",
		poll:"DiscussionPoll",
		publishedAt:"DateTime",
		reactionGroups:"ReactionGroup",
		reactions:"ReactionConnection",
		repository:"Repository",
		resourcePath:"URI",
		stateReason:"DiscussionStateReason",
		title:"String",
		updatedAt:"DateTime",
		upvoteCount:"Int",
		url:"URI",
		userContentEdits:"UserContentEditConnection",
		viewerCanClose:"Boolean",
		viewerCanDelete:"Boolean",
		viewerCanLabel:"Boolean",
		viewerCanReact:"Boolean",
		viewerCanReopen:"Boolean",
		viewerCanSubscribe:"Boolean",
		viewerCanUpdate:"Boolean",
		viewerCanUpvote:"Boolean",
		viewerDidAuthor:"Boolean",
		viewerHasUpvoted:"Boolean",
		viewerSubscription:"SubscriptionState"
	},
	DiscussionCategory:{
		createdAt:"DateTime",
		description:"String",
		emoji:"String",
		emojiHTML:"HTML",
		id:"ID",
		isAnswerable:"Boolean",
		name:"String",
		repository:"Repository",
		slug:"String",
		updatedAt:"DateTime"
	},
	DiscussionCategoryConnection:{
		edges:"DiscussionCategoryEdge",
		nodes:"DiscussionCategory",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	DiscussionCategoryEdge:{
		cursor:"String",
		node:"DiscussionCategory"
	},
	DiscussionComment:{
		author:"Actor",
		authorAssociation:"CommentAuthorAssociation",
		body:"String",
		bodyHTML:"HTML",
		bodyText:"String",
		createdAt:"DateTime",
		createdViaEmail:"Boolean",
		databaseId:"Int",
		deletedAt:"DateTime",
		discussion:"Discussion",
		editor:"Actor",
		id:"ID",
		includesCreatedEdit:"Boolean",
		isAnswer:"Boolean",
		isMinimized:"Boolean",
		lastEditedAt:"DateTime",
		minimizedReason:"String",
		publishedAt:"DateTime",
		reactionGroups:"ReactionGroup",
		reactions:"ReactionConnection",
		replies:"DiscussionCommentConnection",
		replyTo:"DiscussionComment",
		resourcePath:"URI",
		updatedAt:"DateTime",
		upvoteCount:"Int",
		url:"URI",
		userContentEdits:"UserContentEditConnection",
		viewerCanDelete:"Boolean",
		viewerCanMarkAsAnswer:"Boolean",
		viewerCanMinimize:"Boolean",
		viewerCanReact:"Boolean",
		viewerCanUnmarkAsAnswer:"Boolean",
		viewerCanUpdate:"Boolean",
		viewerCanUpvote:"Boolean",
		viewerCannotUpdateReasons:"CommentCannotUpdateReason",
		viewerDidAuthor:"Boolean",
		viewerHasUpvoted:"Boolean"
	},
	DiscussionCommentConnection:{
		edges:"DiscussionCommentEdge",
		nodes:"DiscussionComment",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	DiscussionCommentEdge:{
		cursor:"String",
		node:"DiscussionComment"
	},
	DiscussionConnection:{
		edges:"DiscussionEdge",
		nodes:"Discussion",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	DiscussionEdge:{
		cursor:"String",
		node:"Discussion"
	},
	DiscussionPoll:{
		discussion:"Discussion",
		id:"ID",
		options:"DiscussionPollOptionConnection",
		question:"String",
		totalVoteCount:"Int",
		viewerCanVote:"Boolean",
		viewerHasVoted:"Boolean"
	},
	DiscussionPollOption:{
		id:"ID",
		option:"String",
		poll:"DiscussionPoll",
		totalVoteCount:"Int",
		viewerHasVoted:"Boolean"
	},
	DiscussionPollOptionConnection:{
		edges:"DiscussionPollOptionEdge",
		nodes:"DiscussionPollOption",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	DiscussionPollOptionEdge:{
		cursor:"String",
		node:"DiscussionPollOption"
	},
	DismissPullRequestReviewPayload:{
		clientMutationId:"String",
		pullRequestReview:"PullRequestReview"
	},
	DismissRepositoryVulnerabilityAlertPayload:{
		clientMutationId:"String",
		repositoryVulnerabilityAlert:"RepositoryVulnerabilityAlert"
	},
	DraftIssue:{
		assignees:"UserConnection",
		body:"String",
		bodyHTML:"HTML",
		bodyText:"String",
		createdAt:"DateTime",
		creator:"Actor",
		id:"ID",
		projectV2Items:"ProjectV2ItemConnection",
		projectsV2:"ProjectV2Connection",
		title:"String",
		updatedAt:"DateTime"
	},
	EPSS:{
		percentage:"Float",
		percentile:"Float"
	},
	EnablePullRequestAutoMergePayload:{
		actor:"Actor",
		clientMutationId:"String",
		pullRequest:"PullRequest"
	},
	EnqueuePullRequestPayload:{
		clientMutationId:"String",
		mergeQueueEntry:"MergeQueueEntry"
	},
	Enterprise:{
		announcement:"String",
		announcementCreatedAt:"DateTime",
		announcementExpiresAt:"DateTime",
		announcementUserDismissible:"Boolean",
		avatarUrl:"URI",
		billingEmail:"String",
		billingInfo:"EnterpriseBillingInfo",
		createdAt:"DateTime",
		databaseId:"Int",
		description:"String",
		descriptionHTML:"HTML",
		id:"ID",
		location:"String",
		members:"EnterpriseMemberConnection",
		name:"String",
		organizations:"OrganizationConnection",
		ownerInfo:"EnterpriseOwnerInfo",
		readme:"String",
		readmeHTML:"HTML",
		resourcePath:"URI",
		slug:"String",
		url:"URI",
		viewerIsAdmin:"Boolean",
		websiteUrl:"URI"
	},
	EnterpriseAdministratorConnection:{
		edges:"EnterpriseAdministratorEdge",
		nodes:"User",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	EnterpriseAdministratorEdge:{
		cursor:"String",
		node:"User",
		role:"EnterpriseAdministratorRole"
	},
	EnterpriseAdministratorInvitation:{
		createdAt:"DateTime",
		email:"String",
		enterprise:"Enterprise",
		id:"ID",
		invitee:"User",
		inviter:"User",
		role:"EnterpriseAdministratorRole"
	},
	EnterpriseAdministratorInvitationConnection:{
		edges:"EnterpriseAdministratorInvitationEdge",
		nodes:"EnterpriseAdministratorInvitation",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	EnterpriseAdministratorInvitationEdge:{
		cursor:"String",
		node:"EnterpriseAdministratorInvitation"
	},
	EnterpriseAuditEntryData:{
		"...on MembersCanDeleteReposClearAuditEntry": "MembersCanDeleteReposClearAuditEntry",
		"...on MembersCanDeleteReposDisableAuditEntry": "MembersCanDeleteReposDisableAuditEntry",
		"...on MembersCanDeleteReposEnableAuditEntry": "MembersCanDeleteReposEnableAuditEntry",
		"...on OrgInviteToBusinessAuditEntry": "OrgInviteToBusinessAuditEntry",
		"...on PrivateRepositoryForkingDisableAuditEntry": "PrivateRepositoryForkingDisableAuditEntry",
		"...on PrivateRepositoryForkingEnableAuditEntry": "PrivateRepositoryForkingEnableAuditEntry",
		"...on RepositoryVisibilityChangeDisableAuditEntry": "RepositoryVisibilityChangeDisableAuditEntry",
		"...on RepositoryVisibilityChangeEnableAuditEntry": "RepositoryVisibilityChangeEnableAuditEntry",
		enterpriseResourcePath:"URI",
		enterpriseSlug:"String",
		enterpriseUrl:"URI"
	},
	EnterpriseBillingInfo:{
		allLicensableUsersCount:"Int",
		assetPacks:"Int",
		bandwidthQuota:"Float",
		bandwidthUsage:"Float",
		bandwidthUsagePercentage:"Int",
		storageQuota:"Float",
		storageUsage:"Float",
		storageUsagePercentage:"Int",
		totalAvailableLicenses:"Int",
		totalLicenses:"Int"
	},
	EnterpriseConnection:{
		edges:"EnterpriseEdge",
		nodes:"Enterprise",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	EnterpriseEdge:{
		cursor:"String",
		node:"Enterprise"
	},
	EnterpriseFailedInvitationConnection:{
		edges:"EnterpriseFailedInvitationEdge",
		nodes:"OrganizationInvitation",
		pageInfo:"PageInfo",
		totalCount:"Int",
		totalUniqueUserCount:"Int"
	},
	EnterpriseFailedInvitationEdge:{
		cursor:"String",
		node:"OrganizationInvitation"
	},
	EnterpriseIdentityProvider:{
		digestMethod:"SamlDigestAlgorithm",
		enterprise:"Enterprise",
		externalIdentities:"ExternalIdentityConnection",
		id:"ID",
		idpCertificate:"X509Certificate",
		issuer:"String",
		recoveryCodes:"String",
		signatureMethod:"SamlSignatureAlgorithm",
		ssoUrl:"URI"
	},
	EnterpriseMember:{
		"...on EnterpriseUserAccount":"EnterpriseUserAccount",
		"...on User":"User"
	},
	EnterpriseMemberConnection:{
		edges:"EnterpriseMemberEdge",
		nodes:"EnterpriseMember",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	EnterpriseMemberEdge:{
		cursor:"String",
		node:"EnterpriseMember"
	},
	EnterpriseMemberInvitation:{
		createdAt:"DateTime",
		email:"String",
		enterprise:"Enterprise",
		id:"ID",
		invitee:"User",
		inviter:"User"
	},
	EnterpriseMemberInvitationConnection:{
		edges:"EnterpriseMemberInvitationEdge",
		nodes:"EnterpriseMemberInvitation",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	EnterpriseMemberInvitationEdge:{
		cursor:"String",
		node:"EnterpriseMemberInvitation"
	},
	EnterpriseOrganizationMembershipConnection:{
		edges:"EnterpriseOrganizationMembershipEdge",
		nodes:"Organization",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	EnterpriseOrganizationMembershipEdge:{
		cursor:"String",
		node:"Organization",
		role:"EnterpriseUserAccountMembershipRole"
	},
	EnterpriseOutsideCollaboratorConnection:{
		edges:"EnterpriseOutsideCollaboratorEdge",
		nodes:"User",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	EnterpriseOutsideCollaboratorEdge:{
		cursor:"String",
		node:"User",
		repositories:"EnterpriseRepositoryInfoConnection"
	},
	EnterpriseOwnerInfo:{
		admins:"EnterpriseAdministratorConnection",
		affiliatedUsersWithTwoFactorDisabled:"UserConnection",
		affiliatedUsersWithTwoFactorDisabledExist:"Boolean",
		allowPrivateRepositoryForkingSetting:"EnterpriseEnabledDisabledSettingValue",
		allowPrivateRepositoryForkingSettingOrganizations:"OrganizationConnection",
		allowPrivateRepositoryForkingSettingPolicyValue:"EnterpriseAllowPrivateRepositoryForkingPolicyValue",
		defaultRepositoryPermissionSetting:"EnterpriseDefaultRepositoryPermissionSettingValue",
		defaultRepositoryPermissionSettingOrganizations:"OrganizationConnection",
		domains:"VerifiableDomainConnection",
		enterpriseServerInstallations:"EnterpriseServerInstallationConnection",
		failedInvitations:"EnterpriseFailedInvitationConnection",
		ipAllowListEnabledSetting:"IpAllowListEnabledSettingValue",
		ipAllowListEntries:"IpAllowListEntryConnection",
		ipAllowListForInstalledAppsEnabledSetting:"IpAllowListForInstalledAppsEnabledSettingValue",
		isUpdatingDefaultRepositoryPermission:"Boolean",
		isUpdatingTwoFactorRequirement:"Boolean",
		membersCanChangeRepositoryVisibilitySetting:"EnterpriseEnabledDisabledSettingValue",
		membersCanChangeRepositoryVisibilitySettingOrganizations:"OrganizationConnection",
		membersCanCreateInternalRepositoriesSetting:"Boolean",
		membersCanCreatePrivateRepositoriesSetting:"Boolean",
		membersCanCreatePublicRepositoriesSetting:"Boolean",
		membersCanCreateRepositoriesSetting:"EnterpriseMembersCanCreateRepositoriesSettingValue",
		membersCanCreateRepositoriesSettingOrganizations:"OrganizationConnection",
		membersCanDeleteIssuesSetting:"EnterpriseEnabledDisabledSettingValue",
		membersCanDeleteIssuesSettingOrganizations:"OrganizationConnection",
		membersCanDeleteRepositoriesSetting:"EnterpriseEnabledDisabledSettingValue",
		membersCanDeleteRepositoriesSettingOrganizations:"OrganizationConnection",
		membersCanInviteCollaboratorsSetting:"EnterpriseEnabledDisabledSettingValue",
		membersCanInviteCollaboratorsSettingOrganizations:"OrganizationConnection",
		membersCanMakePurchasesSetting:"EnterpriseMembersCanMakePurchasesSettingValue",
		membersCanUpdateProtectedBranchesSetting:"EnterpriseEnabledDisabledSettingValue",
		membersCanUpdateProtectedBranchesSettingOrganizations:"OrganizationConnection",
		membersCanViewDependencyInsightsSetting:"EnterpriseEnabledDisabledSettingValue",
		membersCanViewDependencyInsightsSettingOrganizations:"OrganizationConnection",
		notificationDeliveryRestrictionEnabledSetting:"NotificationRestrictionSettingValue",
		oidcProvider:"OIDCProvider",
		organizationProjectsSetting:"EnterpriseEnabledDisabledSettingValue",
		organizationProjectsSettingOrganizations:"OrganizationConnection",
		outsideCollaborators:"EnterpriseOutsideCollaboratorConnection",
		pendingAdminInvitations:"EnterpriseAdministratorInvitationConnection",
		pendingCollaboratorInvitations:"RepositoryInvitationConnection",
		pendingMemberInvitations:"EnterprisePendingMemberInvitationConnection",
		pendingUnaffiliatedMemberInvitations:"EnterpriseMemberInvitationConnection",
		repositoryDeployKeySetting:"EnterpriseEnabledDisabledSettingValue",
		repositoryDeployKeySettingOrganizations:"OrganizationConnection",
		repositoryProjectsSetting:"EnterpriseEnabledDisabledSettingValue",
		repositoryProjectsSettingOrganizations:"OrganizationConnection",
		samlIdentityProvider:"EnterpriseIdentityProvider",
		samlIdentityProviderSettingOrganizations:"OrganizationConnection",
		supportEntitlements:"EnterpriseMemberConnection",
		teamDiscussionsSetting:"EnterpriseEnabledDisabledSettingValue",
		teamDiscussionsSettingOrganizations:"OrganizationConnection",
		twoFactorDisallowedMethodsSetting:"EnterpriseDisallowedMethodsSettingValue",
		twoFactorRequiredSetting:"EnterpriseEnabledSettingValue",
		twoFactorRequiredSettingOrganizations:"OrganizationConnection"
	},
	EnterprisePendingMemberInvitationConnection:{
		edges:"EnterprisePendingMemberInvitationEdge",
		nodes:"OrganizationInvitation",
		pageInfo:"PageInfo",
		totalCount:"Int",
		totalUniqueUserCount:"Int"
	},
	EnterprisePendingMemberInvitationEdge:{
		cursor:"String",
		node:"OrganizationInvitation"
	},
	EnterpriseRepositoryInfo:{
		id:"ID",
		isPrivate:"Boolean",
		name:"String",
		nameWithOwner:"String"
	},
	EnterpriseRepositoryInfoConnection:{
		edges:"EnterpriseRepositoryInfoEdge",
		nodes:"EnterpriseRepositoryInfo",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	EnterpriseRepositoryInfoEdge:{
		cursor:"String",
		node:"EnterpriseRepositoryInfo"
	},
	EnterpriseServerInstallation:{
		createdAt:"DateTime",
		customerName:"String",
		hostName:"String",
		id:"ID",
		isConnected:"Boolean",
		updatedAt:"DateTime",
		userAccounts:"EnterpriseServerUserAccountConnection",
		userAccountsUploads:"EnterpriseServerUserAccountsUploadConnection"
	},
	EnterpriseServerInstallationConnection:{
		edges:"EnterpriseServerInstallationEdge",
		nodes:"EnterpriseServerInstallation",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	EnterpriseServerInstallationEdge:{
		cursor:"String",
		node:"EnterpriseServerInstallation"
	},
	EnterpriseServerInstallationMembershipConnection:{
		edges:"EnterpriseServerInstallationMembershipEdge",
		nodes:"EnterpriseServerInstallation",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	EnterpriseServerInstallationMembershipEdge:{
		cursor:"String",
		node:"EnterpriseServerInstallation",
		role:"EnterpriseUserAccountMembershipRole"
	},
	EnterpriseServerUserAccount:{
		createdAt:"DateTime",
		emails:"EnterpriseServerUserAccountEmailConnection",
		enterpriseServerInstallation:"EnterpriseServerInstallation",
		id:"ID",
		isSiteAdmin:"Boolean",
		login:"String",
		profileName:"String",
		remoteCreatedAt:"DateTime",
		remoteUserId:"Int",
		updatedAt:"DateTime"
	},
	EnterpriseServerUserAccountConnection:{
		edges:"EnterpriseServerUserAccountEdge",
		nodes:"EnterpriseServerUserAccount",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	EnterpriseServerUserAccountEdge:{
		cursor:"String",
		node:"EnterpriseServerUserAccount"
	},
	EnterpriseServerUserAccountEmail:{
		createdAt:"DateTime",
		email:"String",
		id:"ID",
		isPrimary:"Boolean",
		updatedAt:"DateTime",
		userAccount:"EnterpriseServerUserAccount"
	},
	EnterpriseServerUserAccountEmailConnection:{
		edges:"EnterpriseServerUserAccountEmailEdge",
		nodes:"EnterpriseServerUserAccountEmail",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	EnterpriseServerUserAccountEmailEdge:{
		cursor:"String",
		node:"EnterpriseServerUserAccountEmail"
	},
	EnterpriseServerUserAccountsUpload:{
		createdAt:"DateTime",
		enterprise:"Enterprise",
		enterpriseServerInstallation:"EnterpriseServerInstallation",
		id:"ID",
		name:"String",
		syncState:"EnterpriseServerUserAccountsUploadSyncState",
		updatedAt:"DateTime"
	},
	EnterpriseServerUserAccountsUploadConnection:{
		edges:"EnterpriseServerUserAccountsUploadEdge",
		nodes:"EnterpriseServerUserAccountsUpload",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	EnterpriseServerUserAccountsUploadEdge:{
		cursor:"String",
		node:"EnterpriseServerUserAccountsUpload"
	},
	EnterpriseUserAccount:{
		avatarUrl:"URI",
		createdAt:"DateTime",
		enterprise:"Enterprise",
		enterpriseInstallations:"EnterpriseServerInstallationMembershipConnection",
		id:"ID",
		login:"String",
		name:"String",
		organizations:"EnterpriseOrganizationMembershipConnection",
		resourcePath:"URI",
		updatedAt:"DateTime",
		url:"URI",
		user:"User"
	},
	Environment:{
		databaseId:"Int",
		id:"ID",
		isPinned:"Boolean",
		latestCompletedDeployment:"Deployment",
		name:"String",
		pinnedPosition:"Int",
		protectionRules:"DeploymentProtectionRuleConnection"
	},
	EnvironmentConnection:{
		edges:"EnvironmentEdge",
		nodes:"Environment",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	EnvironmentEdge:{
		cursor:"String",
		node:"Environment"
	},
	ExternalIdentity:{
		guid:"String",
		id:"ID",
		organizationInvitation:"OrganizationInvitation",
		samlIdentity:"ExternalIdentitySamlAttributes",
		scimIdentity:"ExternalIdentityScimAttributes",
		user:"User"
	},
	ExternalIdentityAttribute:{
		metadata:"String",
		name:"String",
		value:"String"
	},
	ExternalIdentityConnection:{
		edges:"ExternalIdentityEdge",
		nodes:"ExternalIdentity",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	ExternalIdentityEdge:{
		cursor:"String",
		node:"ExternalIdentity"
	},
	ExternalIdentitySamlAttributes:{
		attributes:"ExternalIdentityAttribute",
		emails:"UserEmailMetadata",
		familyName:"String",
		givenName:"String",
		groups:"String",
		nameId:"String",
		username:"String"
	},
	ExternalIdentityScimAttributes:{
		emails:"UserEmailMetadata",
		familyName:"String",
		givenName:"String",
		groups:"String",
		username:"String"
	},
	FileExtensionRestrictionParameters:{
		restrictedFileExtensions:"String"
	},
	FilePathRestrictionParameters:{
		restrictedFilePaths:"String"
	},
	FollowOrganizationPayload:{
		clientMutationId:"String",
		organization:"Organization"
	},
	FollowUserPayload:{
		clientMutationId:"String",
		user:"User"
	},
	FollowerConnection:{
		edges:"UserEdge",
		nodes:"User",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	FollowingConnection:{
		edges:"UserEdge",
		nodes:"User",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	FundingLink:{
		platform:"FundingPlatform",
		url:"URI"
	},
	GenericHovercardContext:{
		message:"String",
		octicon:"String"
	},
	Gist:{
		comments:"GistCommentConnection",
		createdAt:"DateTime",
		description:"String",
		files:"GistFile",
		forks:"GistConnection",
		id:"ID",
		isFork:"Boolean",
		isPublic:"Boolean",
		name:"String",
		owner:"RepositoryOwner",
		pushedAt:"DateTime",
		resourcePath:"URI",
		stargazerCount:"Int",
		stargazers:"StargazerConnection",
		updatedAt:"DateTime",
		url:"URI",
		viewerHasStarred:"Boolean"
	},
	GistComment:{
		author:"Actor",
		authorAssociation:"CommentAuthorAssociation",
		body:"String",
		bodyHTML:"HTML",
		bodyText:"String",
		createdAt:"DateTime",
		createdViaEmail:"Boolean",
		databaseId:"Int",
		editor:"Actor",
		gist:"Gist",
		id:"ID",
		includesCreatedEdit:"Boolean",
		isMinimized:"Boolean",
		lastEditedAt:"DateTime",
		minimizedReason:"String",
		publishedAt:"DateTime",
		updatedAt:"DateTime",
		userContentEdits:"UserContentEditConnection",
		viewerCanDelete:"Boolean",
		viewerCanMinimize:"Boolean",
		viewerCanUpdate:"Boolean",
		viewerCannotUpdateReasons:"CommentCannotUpdateReason",
		viewerDidAuthor:"Boolean"
	},
	GistCommentConnection:{
		edges:"GistCommentEdge",
		nodes:"GistComment",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	GistCommentEdge:{
		cursor:"String",
		node:"GistComment"
	},
	GistConnection:{
		edges:"GistEdge",
		nodes:"Gist",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	GistEdge:{
		cursor:"String",
		node:"Gist"
	},
	GistFile:{
		encodedName:"String",
		encoding:"String",
		extension:"String",
		isImage:"Boolean",
		isTruncated:"Boolean",
		language:"Language",
		name:"String",
		size:"Int",
		text:"String"
	},
	GitActor:{
		avatarUrl:"URI",
		date:"GitTimestamp",
		email:"String",
		name:"String",
		user:"User"
	},
	GitActorConnection:{
		edges:"GitActorEdge",
		nodes:"GitActor",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	GitActorEdge:{
		cursor:"String",
		node:"GitActor"
	},
	GitHubMetadata:{
		gitHubServicesSha:"GitObjectID",
		gitIpAddresses:"String",
		githubEnterpriseImporterIpAddresses:"String",
		hookIpAddresses:"String",
		importerIpAddresses:"String",
		isPasswordAuthenticationVerifiable:"Boolean",
		pagesIpAddresses:"String"
	},
	GitObject:{
		"...on Blob": "Blob",
		"...on Commit": "Commit",
		"...on Tag": "Tag",
		"...on Tree": "Tree",
		abbreviatedOid:"String",
		commitResourcePath:"URI",
		commitUrl:"URI",
		id:"ID",
		oid:"GitObjectID",
		repository:"Repository"
	},
	GitObjectID: `scalar.GitObjectID` as const,
	GitRefname: `scalar.GitRefname` as const,
	GitSSHRemote: `scalar.GitSSHRemote` as const,
	GitSignature:{
		"...on GpgSignature": "GpgSignature",
		"...on SmimeSignature": "SmimeSignature",
		"...on SshSignature": "SshSignature",
		"...on UnknownSignature": "UnknownSignature",
		email:"String",
		isValid:"Boolean",
		payload:"String",
		signature:"String",
		signer:"User",
		state:"GitSignatureState",
		verifiedAt:"DateTime",
		wasSignedByGitHub:"Boolean"
	},
	GitTimestamp: `scalar.GitTimestamp` as const,
	GpgSignature:{
		email:"String",
		isValid:"Boolean",
		keyId:"String",
		payload:"String",
		signature:"String",
		signer:"User",
		state:"GitSignatureState",
		verifiedAt:"DateTime",
		wasSignedByGitHub:"Boolean"
	},
	GrantEnterpriseOrganizationsMigratorRolePayload:{
		clientMutationId:"String",
		organizations:"OrganizationConnection"
	},
	GrantMigratorRolePayload:{
		clientMutationId:"String",
		success:"Boolean"
	},
	HTML: `scalar.HTML` as const,
	HeadRefDeletedEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		headRef:"Ref",
		headRefName:"String",
		id:"ID",
		pullRequest:"PullRequest"
	},
	HeadRefForcePushedEvent:{
		actor:"Actor",
		afterCommit:"Commit",
		beforeCommit:"Commit",
		createdAt:"DateTime",
		id:"ID",
		pullRequest:"PullRequest",
		ref:"Ref"
	},
	HeadRefRestoredEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		id:"ID",
		pullRequest:"PullRequest"
	},
	Hovercard:{
		contexts:"HovercardContext"
	},
	HovercardContext:{
		"...on GenericHovercardContext": "GenericHovercardContext",
		"...on OrganizationTeamsHovercardContext": "OrganizationTeamsHovercardContext",
		"...on OrganizationsHovercardContext": "OrganizationsHovercardContext",
		"...on ReviewStatusHovercardContext": "ReviewStatusHovercardContext",
		"...on ViewerHovercardContext": "ViewerHovercardContext",
		message:"String",
		octicon:"String"
	},
	ImportProjectPayload:{
		clientMutationId:"String",
		project:"Project"
	},
	InviteEnterpriseAdminPayload:{
		clientMutationId:"String",
		invitation:"EnterpriseAdministratorInvitation"
	},
	InviteEnterpriseMemberPayload:{
		clientMutationId:"String",
		invitation:"EnterpriseMemberInvitation"
	},
	IpAllowListEntry:{
		allowListValue:"String",
		createdAt:"DateTime",
		id:"ID",
		isActive:"Boolean",
		name:"String",
		owner:"IpAllowListOwner",
		updatedAt:"DateTime"
	},
	IpAllowListEntryConnection:{
		edges:"IpAllowListEntryEdge",
		nodes:"IpAllowListEntry",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	IpAllowListEntryEdge:{
		cursor:"String",
		node:"IpAllowListEntry"
	},
	IpAllowListOwner:{
		"...on App":"App",
		"...on Enterprise":"Enterprise",
		"...on Organization":"Organization"
	},
	Issue:{
		activeLockReason:"LockReason",
		assignees:"UserConnection",
		author:"Actor",
		authorAssociation:"CommentAuthorAssociation",
		body:"String",
		bodyHTML:"HTML",
		bodyResourcePath:"URI",
		bodyText:"String",
		bodyUrl:"URI",
		closed:"Boolean",
		closedAt:"DateTime",
		closedByPullRequestsReferences:"PullRequestConnection",
		comments:"IssueCommentConnection",
		createdAt:"DateTime",
		createdViaEmail:"Boolean",
		databaseId:"Int",
		editor:"Actor",
		fullDatabaseId:"BigInt",
		hovercard:"Hovercard",
		id:"ID",
		includesCreatedEdit:"Boolean",
		isPinned:"Boolean",
		isReadByViewer:"Boolean",
		labels:"LabelConnection",
		lastEditedAt:"DateTime",
		linkedBranches:"LinkedBranchConnection",
		locked:"Boolean",
		milestone:"Milestone",
		number:"Int",
		parent:"Issue",
		participants:"UserConnection",
		projectCards:"ProjectCardConnection",
		projectItems:"ProjectV2ItemConnection",
		projectV2:"ProjectV2",
		projectsV2:"ProjectV2Connection",
		publishedAt:"DateTime",
		reactionGroups:"ReactionGroup",
		reactions:"ReactionConnection",
		repository:"Repository",
		resourcePath:"URI",
		state:"IssueState",
		stateReason:"IssueStateReason",
		subIssues:"IssueConnection",
		subIssuesSummary:"SubIssuesSummary",
		timeline:"IssueTimelineConnection",
		timelineItems:"IssueTimelineItemsConnection",
		title:"String",
		titleHTML:"String",
		trackedInIssues:"IssueConnection",
		trackedIssues:"IssueConnection",
		trackedIssuesCount:"Int",
		updatedAt:"DateTime",
		url:"URI",
		userContentEdits:"UserContentEditConnection",
		viewerCanClose:"Boolean",
		viewerCanDelete:"Boolean",
		viewerCanLabel:"Boolean",
		viewerCanReact:"Boolean",
		viewerCanReopen:"Boolean",
		viewerCanSubscribe:"Boolean",
		viewerCanUpdate:"Boolean",
		viewerCannotUpdateReasons:"CommentCannotUpdateReason",
		viewerDidAuthor:"Boolean",
		viewerSubscription:"SubscriptionState",
		viewerThreadSubscriptionFormAction:"ThreadSubscriptionFormAction",
		viewerThreadSubscriptionStatus:"ThreadSubscriptionState"
	},
	IssueComment:{
		author:"Actor",
		authorAssociation:"CommentAuthorAssociation",
		body:"String",
		bodyHTML:"HTML",
		bodyText:"String",
		createdAt:"DateTime",
		createdViaEmail:"Boolean",
		databaseId:"Int",
		editor:"Actor",
		fullDatabaseId:"BigInt",
		id:"ID",
		includesCreatedEdit:"Boolean",
		isMinimized:"Boolean",
		issue:"Issue",
		lastEditedAt:"DateTime",
		minimizedReason:"String",
		publishedAt:"DateTime",
		pullRequest:"PullRequest",
		reactionGroups:"ReactionGroup",
		reactions:"ReactionConnection",
		repository:"Repository",
		resourcePath:"URI",
		updatedAt:"DateTime",
		url:"URI",
		userContentEdits:"UserContentEditConnection",
		viewerCanDelete:"Boolean",
		viewerCanMinimize:"Boolean",
		viewerCanReact:"Boolean",
		viewerCanUpdate:"Boolean",
		viewerCannotUpdateReasons:"CommentCannotUpdateReason",
		viewerDidAuthor:"Boolean"
	},
	IssueCommentConnection:{
		edges:"IssueCommentEdge",
		nodes:"IssueComment",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	IssueCommentEdge:{
		cursor:"String",
		node:"IssueComment"
	},
	IssueConnection:{
		edges:"IssueEdge",
		nodes:"Issue",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	IssueContributionsByRepository:{
		contributions:"CreatedIssueContributionConnection",
		repository:"Repository"
	},
	IssueEdge:{
		cursor:"String",
		node:"Issue"
	},
	IssueOrPullRequest:{
		"...on Issue":"Issue",
		"...on PullRequest":"PullRequest"
	},
	IssueTemplate:{
		about:"String",
		assignees:"UserConnection",
		body:"String",
		filename:"String",
		labels:"LabelConnection",
		name:"String",
		title:"String"
	},
	IssueTimelineConnection:{
		edges:"IssueTimelineItemEdge",
		nodes:"IssueTimelineItem",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	IssueTimelineItem:{
		"...on AssignedEvent":"AssignedEvent",
		"...on ClosedEvent":"ClosedEvent",
		"...on Commit":"Commit",
		"...on CrossReferencedEvent":"CrossReferencedEvent",
		"...on DemilestonedEvent":"DemilestonedEvent",
		"...on IssueComment":"IssueComment",
		"...on LabeledEvent":"LabeledEvent",
		"...on LockedEvent":"LockedEvent",
		"...on MilestonedEvent":"MilestonedEvent",
		"...on ReferencedEvent":"ReferencedEvent",
		"...on RenamedTitleEvent":"RenamedTitleEvent",
		"...on ReopenedEvent":"ReopenedEvent",
		"...on SubscribedEvent":"SubscribedEvent",
		"...on TransferredEvent":"TransferredEvent",
		"...on UnassignedEvent":"UnassignedEvent",
		"...on UnlabeledEvent":"UnlabeledEvent",
		"...on UnlockedEvent":"UnlockedEvent",
		"...on UnsubscribedEvent":"UnsubscribedEvent",
		"...on UserBlockedEvent":"UserBlockedEvent"
	},
	IssueTimelineItemEdge:{
		cursor:"String",
		node:"IssueTimelineItem"
	},
	IssueTimelineItems:{
		"...on AddedToProjectEvent":"AddedToProjectEvent",
		"...on AssignedEvent":"AssignedEvent",
		"...on ClosedEvent":"ClosedEvent",
		"...on CommentDeletedEvent":"CommentDeletedEvent",
		"...on ConnectedEvent":"ConnectedEvent",
		"...on ConvertedNoteToIssueEvent":"ConvertedNoteToIssueEvent",
		"...on ConvertedToDiscussionEvent":"ConvertedToDiscussionEvent",
		"...on CrossReferencedEvent":"CrossReferencedEvent",
		"...on DemilestonedEvent":"DemilestonedEvent",
		"...on DisconnectedEvent":"DisconnectedEvent",
		"...on IssueComment":"IssueComment",
		"...on LabeledEvent":"LabeledEvent",
		"...on LockedEvent":"LockedEvent",
		"...on MarkedAsDuplicateEvent":"MarkedAsDuplicateEvent",
		"...on MentionedEvent":"MentionedEvent",
		"...on MilestonedEvent":"MilestonedEvent",
		"...on MovedColumnsInProjectEvent":"MovedColumnsInProjectEvent",
		"...on PinnedEvent":"PinnedEvent",
		"...on ReferencedEvent":"ReferencedEvent",
		"...on RemovedFromProjectEvent":"RemovedFromProjectEvent",
		"...on RenamedTitleEvent":"RenamedTitleEvent",
		"...on ReopenedEvent":"ReopenedEvent",
		"...on SubscribedEvent":"SubscribedEvent",
		"...on TransferredEvent":"TransferredEvent",
		"...on UnassignedEvent":"UnassignedEvent",
		"...on UnlabeledEvent":"UnlabeledEvent",
		"...on UnlockedEvent":"UnlockedEvent",
		"...on UnmarkedAsDuplicateEvent":"UnmarkedAsDuplicateEvent",
		"...on UnpinnedEvent":"UnpinnedEvent",
		"...on UnsubscribedEvent":"UnsubscribedEvent",
		"...on UserBlockedEvent":"UserBlockedEvent"
	},
	IssueTimelineItemsConnection:{
		edges:"IssueTimelineItemsEdge",
		filteredCount:"Int",
		nodes:"IssueTimelineItems",
		pageCount:"Int",
		pageInfo:"PageInfo",
		totalCount:"Int",
		updatedAt:"DateTime"
	},
	IssueTimelineItemsEdge:{
		cursor:"String",
		node:"IssueTimelineItems"
	},
	JoinedGitHubContribution:{
		isRestricted:"Boolean",
		occurredAt:"DateTime",
		resourcePath:"URI",
		url:"URI",
		user:"User"
	},
	Label:{
		color:"String",
		createdAt:"DateTime",
		description:"String",
		id:"ID",
		isDefault:"Boolean",
		issues:"IssueConnection",
		name:"String",
		pullRequests:"PullRequestConnection",
		repository:"Repository",
		resourcePath:"URI",
		updatedAt:"DateTime",
		url:"URI"
	},
	LabelConnection:{
		edges:"LabelEdge",
		nodes:"Label",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	LabelEdge:{
		cursor:"String",
		node:"Label"
	},
	Labelable:{
		"...on Discussion": "Discussion",
		"...on Issue": "Issue",
		"...on PullRequest": "PullRequest",
		labels:"LabelConnection",
		viewerCanLabel:"Boolean"
	},
	LabeledEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		id:"ID",
		label:"Label",
		labelable:"Labelable"
	},
	Language:{
		color:"String",
		id:"ID",
		name:"String"
	},
	LanguageConnection:{
		edges:"LanguageEdge",
		nodes:"Language",
		pageInfo:"PageInfo",
		totalCount:"Int",
		totalSize:"Int"
	},
	LanguageEdge:{
		cursor:"String",
		node:"Language",
		size:"Int"
	},
	License:{
		body:"String",
		conditions:"LicenseRule",
		description:"String",
		featured:"Boolean",
		hidden:"Boolean",
		id:"ID",
		implementation:"String",
		key:"String",
		limitations:"LicenseRule",
		name:"String",
		nickname:"String",
		permissions:"LicenseRule",
		pseudoLicense:"Boolean",
		spdxId:"String",
		url:"URI"
	},
	LicenseRule:{
		description:"String",
		key:"String",
		label:"String"
	},
	LinkProjectV2ToRepositoryPayload:{
		clientMutationId:"String",
		repository:"Repository"
	},
	LinkProjectV2ToTeamPayload:{
		clientMutationId:"String",
		team:"Team"
	},
	LinkRepositoryToProjectPayload:{
		clientMutationId:"String",
		project:"Project",
		repository:"Repository"
	},
	LinkedBranch:{
		id:"ID",
		ref:"Ref"
	},
	LinkedBranchConnection:{
		edges:"LinkedBranchEdge",
		nodes:"LinkedBranch",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	LinkedBranchEdge:{
		cursor:"String",
		node:"LinkedBranch"
	},
	LockLockablePayload:{
		actor:"Actor",
		clientMutationId:"String",
		lockedRecord:"Lockable"
	},
	Lockable:{
		"...on Discussion": "Discussion",
		"...on Issue": "Issue",
		"...on PullRequest": "PullRequest",
		activeLockReason:"LockReason",
		locked:"Boolean"
	},
	LockedEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		id:"ID",
		lockReason:"LockReason",
		lockable:"Lockable"
	},
	Mannequin:{
		avatarUrl:"URI",
		claimant:"User",
		createdAt:"DateTime",
		databaseId:"Int",
		email:"String",
		id:"ID",
		login:"String",
		resourcePath:"URI",
		updatedAt:"DateTime",
		url:"URI"
	},
	MannequinConnection:{
		edges:"MannequinEdge",
		nodes:"Mannequin",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	MannequinEdge:{
		cursor:"String",
		node:"Mannequin"
	},
	MarkDiscussionCommentAsAnswerPayload:{
		clientMutationId:"String",
		discussion:"Discussion"
	},
	MarkFileAsViewedPayload:{
		clientMutationId:"String",
		pullRequest:"PullRequest"
	},
	MarkNotificationAsDonePayload:{
		clientMutationId:"String",
		success:"Boolean",
		viewer:"User"
	},
	MarkProjectV2AsTemplatePayload:{
		clientMutationId:"String",
		projectV2:"ProjectV2"
	},
	MarkPullRequestReadyForReviewPayload:{
		clientMutationId:"String",
		pullRequest:"PullRequest"
	},
	MarkedAsDuplicateEvent:{
		actor:"Actor",
		canonical:"IssueOrPullRequest",
		createdAt:"DateTime",
		duplicate:"IssueOrPullRequest",
		id:"ID",
		isCrossRepository:"Boolean"
	},
	MarketplaceCategory:{
		description:"String",
		howItWorks:"String",
		id:"ID",
		name:"String",
		primaryListingCount:"Int",
		resourcePath:"URI",
		secondaryListingCount:"Int",
		slug:"String",
		url:"URI"
	},
	MarketplaceListing:{
		app:"App",
		companyUrl:"URI",
		configurationResourcePath:"URI",
		configurationUrl:"URI",
		documentationUrl:"URI",
		extendedDescription:"String",
		extendedDescriptionHTML:"HTML",
		fullDescription:"String",
		fullDescriptionHTML:"HTML",
		hasPublishedFreeTrialPlans:"Boolean",
		hasTermsOfService:"Boolean",
		hasVerifiedOwner:"Boolean",
		howItWorks:"String",
		howItWorksHTML:"HTML",
		id:"ID",
		installationUrl:"URI",
		installedForViewer:"Boolean",
		isArchived:"Boolean",
		isDraft:"Boolean",
		isPaid:"Boolean",
		isPublic:"Boolean",
		isRejected:"Boolean",
		isUnverified:"Boolean",
		isUnverifiedPending:"Boolean",
		isVerificationPendingFromDraft:"Boolean",
		isVerificationPendingFromUnverified:"Boolean",
		isVerified:"Boolean",
		logoBackgroundColor:"String",
		logoUrl:"URI",
		name:"String",
		normalizedShortDescription:"String",
		pricingUrl:"URI",
		primaryCategory:"MarketplaceCategory",
		privacyPolicyUrl:"URI",
		resourcePath:"URI",
		screenshotUrls:"String",
		secondaryCategory:"MarketplaceCategory",
		shortDescription:"String",
		slug:"String",
		statusUrl:"URI",
		supportEmail:"String",
		supportUrl:"URI",
		termsOfServiceUrl:"URI",
		url:"URI",
		viewerCanAddPlans:"Boolean",
		viewerCanApprove:"Boolean",
		viewerCanDelist:"Boolean",
		viewerCanEdit:"Boolean",
		viewerCanEditCategories:"Boolean",
		viewerCanEditPlans:"Boolean",
		viewerCanRedraft:"Boolean",
		viewerCanReject:"Boolean",
		viewerCanRequestApproval:"Boolean",
		viewerHasPurchased:"Boolean",
		viewerHasPurchasedForAllOrganizations:"Boolean",
		viewerIsListingAdmin:"Boolean"
	},
	MarketplaceListingConnection:{
		edges:"MarketplaceListingEdge",
		nodes:"MarketplaceListing",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	MarketplaceListingEdge:{
		cursor:"String",
		node:"MarketplaceListing"
	},
	MaxFilePathLengthParameters:{
		maxFilePathLength:"Int"
	},
	MaxFileSizeParameters:{
		maxFileSize:"Int"
	},
	MemberFeatureRequestNotification:{
		body:"String",
		id:"ID",
		title:"String",
		updatedAt:"DateTime"
	},
	MemberStatusable:{
		"...on Organization": "Organization",
		"...on Team": "Team",
		memberStatuses:"UserStatusConnection"
	},
	MembersCanDeleteReposClearAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		enterpriseResourcePath:"URI",
		enterpriseSlug:"String",
		enterpriseUrl:"URI",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	MembersCanDeleteReposDisableAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		enterpriseResourcePath:"URI",
		enterpriseSlug:"String",
		enterpriseUrl:"URI",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	MembersCanDeleteReposEnableAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		enterpriseResourcePath:"URI",
		enterpriseSlug:"String",
		enterpriseUrl:"URI",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	MentionedEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		databaseId:"Int",
		id:"ID"
	},
	MergeBranchPayload:{
		clientMutationId:"String",
		mergeCommit:"Commit"
	},
	MergePullRequestPayload:{
		actor:"Actor",
		clientMutationId:"String",
		pullRequest:"PullRequest"
	},
	MergeQueue:{
		configuration:"MergeQueueConfiguration",
		entries:"MergeQueueEntryConnection",
		id:"ID",
		nextEntryEstimatedTimeToMerge:"Int",
		repository:"Repository",
		resourcePath:"URI",
		url:"URI"
	},
	MergeQueueConfiguration:{
		checkResponseTimeout:"Int",
		maximumEntriesToBuild:"Int",
		maximumEntriesToMerge:"Int",
		mergeMethod:"PullRequestMergeMethod",
		mergingStrategy:"MergeQueueMergingStrategy",
		minimumEntriesToMerge:"Int",
		minimumEntriesToMergeWaitTime:"Int"
	},
	MergeQueueEntry:{
		baseCommit:"Commit",
		enqueuedAt:"DateTime",
		enqueuer:"Actor",
		estimatedTimeToMerge:"Int",
		headCommit:"Commit",
		id:"ID",
		jump:"Boolean",
		mergeQueue:"MergeQueue",
		position:"Int",
		pullRequest:"PullRequest",
		solo:"Boolean",
		state:"MergeQueueEntryState"
	},
	MergeQueueEntryConnection:{
		edges:"MergeQueueEntryEdge",
		nodes:"MergeQueueEntry",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	MergeQueueEntryEdge:{
		cursor:"String",
		node:"MergeQueueEntry"
	},
	MergeQueueParameters:{
		checkResponseTimeoutMinutes:"Int",
		groupingStrategy:"MergeQueueGroupingStrategy",
		maxEntriesToBuild:"Int",
		maxEntriesToMerge:"Int",
		mergeMethod:"MergeQueueMergeMethod",
		minEntriesToMerge:"Int",
		minEntriesToMergeWaitMinutes:"Int"
	},
	MergedEvent:{
		actor:"Actor",
		commit:"Commit",
		createdAt:"DateTime",
		id:"ID",
		mergeRef:"Ref",
		mergeRefName:"String",
		pullRequest:"PullRequest",
		resourcePath:"URI",
		url:"URI"
	},
	Migration:{
		"...on RepositoryMigration": "RepositoryMigration",
		continueOnError:"Boolean",
		createdAt:"DateTime",
		databaseId:"String",
		failureReason:"String",
		id:"ID",
		migrationLogUrl:"URI",
		migrationSource:"MigrationSource",
		repositoryName:"String",
		sourceUrl:"URI",
		state:"MigrationState",
		warningsCount:"Int"
	},
	MigrationSource:{
		id:"ID",
		name:"String",
		type:"MigrationSourceType",
		url:"URI"
	},
	Milestone:{
		closed:"Boolean",
		closedAt:"DateTime",
		createdAt:"DateTime",
		creator:"Actor",
		description:"String",
		dueOn:"DateTime",
		id:"ID",
		issues:"IssueConnection",
		number:"Int",
		progressPercentage:"Float",
		pullRequests:"PullRequestConnection",
		repository:"Repository",
		resourcePath:"URI",
		state:"MilestoneState",
		title:"String",
		updatedAt:"DateTime",
		url:"URI",
		viewerCanClose:"Boolean",
		viewerCanReopen:"Boolean"
	},
	MilestoneConnection:{
		edges:"MilestoneEdge",
		nodes:"Milestone",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	MilestoneEdge:{
		cursor:"String",
		node:"Milestone"
	},
	MilestoneItem:{
		"...on Issue":"Issue",
		"...on PullRequest":"PullRequest"
	},
	MilestonedEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		id:"ID",
		milestoneTitle:"String",
		subject:"MilestoneItem"
	},
	Minimizable:{
		"...on CommitComment": "CommitComment",
		"...on DiscussionComment": "DiscussionComment",
		"...on GistComment": "GistComment",
		"...on IssueComment": "IssueComment",
		"...on PullRequestReview": "PullRequestReview",
		"...on PullRequestReviewComment": "PullRequestReviewComment",
		isMinimized:"Boolean",
		minimizedReason:"String",
		viewerCanMinimize:"Boolean"
	},
	MinimizeCommentPayload:{
		clientMutationId:"String",
		minimizedComment:"Minimizable"
	},
	MoveProjectCardPayload:{
		cardEdge:"ProjectCardEdge",
		clientMutationId:"String"
	},
	MoveProjectColumnPayload:{
		clientMutationId:"String",
		columnEdge:"ProjectColumnEdge"
	},
	MovedColumnsInProjectEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		databaseId:"Int",
		id:"ID",
		previousProjectColumnName:"String",
		project:"Project",
		projectCard:"ProjectCard",
		projectColumnName:"String"
	},
	Mutation:{
		abortQueuedMigrations:"AbortQueuedMigrationsPayload",
		abortRepositoryMigration:"AbortRepositoryMigrationPayload",
		acceptEnterpriseAdministratorInvitation:"AcceptEnterpriseAdministratorInvitationPayload",
		acceptEnterpriseMemberInvitation:"AcceptEnterpriseMemberInvitationPayload",
		acceptTopicSuggestion:"AcceptTopicSuggestionPayload",
		addAssigneesToAssignable:"AddAssigneesToAssignablePayload",
		addComment:"AddCommentPayload",
		addDiscussionComment:"AddDiscussionCommentPayload",
		addDiscussionPollVote:"AddDiscussionPollVotePayload",
		addEnterpriseOrganizationMember:"AddEnterpriseOrganizationMemberPayload",
		addEnterpriseSupportEntitlement:"AddEnterpriseSupportEntitlementPayload",
		addLabelsToLabelable:"AddLabelsToLabelablePayload",
		addProjectCard:"AddProjectCardPayload",
		addProjectColumn:"AddProjectColumnPayload",
		addProjectV2DraftIssue:"AddProjectV2DraftIssuePayload",
		addProjectV2ItemById:"AddProjectV2ItemByIdPayload",
		addPullRequestReview:"AddPullRequestReviewPayload",
		addPullRequestReviewComment:"AddPullRequestReviewCommentPayload",
		addPullRequestReviewThread:"AddPullRequestReviewThreadPayload",
		addPullRequestReviewThreadReply:"AddPullRequestReviewThreadReplyPayload",
		addReaction:"AddReactionPayload",
		addStar:"AddStarPayload",
		addSubIssue:"AddSubIssuePayload",
		addUpvote:"AddUpvotePayload",
		addVerifiableDomain:"AddVerifiableDomainPayload",
		approveDeployments:"ApproveDeploymentsPayload",
		approveVerifiableDomain:"ApproveVerifiableDomainPayload",
		archiveProjectV2Item:"ArchiveProjectV2ItemPayload",
		archiveRepository:"ArchiveRepositoryPayload",
		cancelEnterpriseAdminInvitation:"CancelEnterpriseAdminInvitationPayload",
		cancelEnterpriseMemberInvitation:"CancelEnterpriseMemberInvitationPayload",
		cancelSponsorship:"CancelSponsorshipPayload",
		changeUserStatus:"ChangeUserStatusPayload",
		clearLabelsFromLabelable:"ClearLabelsFromLabelablePayload",
		clearProjectV2ItemFieldValue:"ClearProjectV2ItemFieldValuePayload",
		cloneProject:"CloneProjectPayload",
		cloneTemplateRepository:"CloneTemplateRepositoryPayload",
		closeDiscussion:"CloseDiscussionPayload",
		closeIssue:"CloseIssuePayload",
		closePullRequest:"ClosePullRequestPayload",
		convertProjectCardNoteToIssue:"ConvertProjectCardNoteToIssuePayload",
		convertProjectV2DraftIssueItemToIssue:"ConvertProjectV2DraftIssueItemToIssuePayload",
		convertPullRequestToDraft:"ConvertPullRequestToDraftPayload",
		copyProjectV2:"CopyProjectV2Payload",
		createAttributionInvitation:"CreateAttributionInvitationPayload",
		createBranchProtectionRule:"CreateBranchProtectionRulePayload",
		createCheckRun:"CreateCheckRunPayload",
		createCheckSuite:"CreateCheckSuitePayload",
		createCommitOnBranch:"CreateCommitOnBranchPayload",
		createDeployment:"CreateDeploymentPayload",
		createDeploymentStatus:"CreateDeploymentStatusPayload",
		createDiscussion:"CreateDiscussionPayload",
		createEnterpriseOrganization:"CreateEnterpriseOrganizationPayload",
		createEnvironment:"CreateEnvironmentPayload",
		createIpAllowListEntry:"CreateIpAllowListEntryPayload",
		createIssue:"CreateIssuePayload",
		createLabel:"CreateLabelPayload",
		createLinkedBranch:"CreateLinkedBranchPayload",
		createMigrationSource:"CreateMigrationSourcePayload",
		createProject:"CreateProjectPayload",
		createProjectV2:"CreateProjectV2Payload",
		createProjectV2Field:"CreateProjectV2FieldPayload",
		createProjectV2StatusUpdate:"CreateProjectV2StatusUpdatePayload",
		createPullRequest:"CreatePullRequestPayload",
		createRef:"CreateRefPayload",
		createRepository:"CreateRepositoryPayload",
		createRepositoryRuleset:"CreateRepositoryRulesetPayload",
		createSponsorsListing:"CreateSponsorsListingPayload",
		createSponsorsTier:"CreateSponsorsTierPayload",
		createSponsorship:"CreateSponsorshipPayload",
		createSponsorships:"CreateSponsorshipsPayload",
		createTeamDiscussion:"CreateTeamDiscussionPayload",
		createTeamDiscussionComment:"CreateTeamDiscussionCommentPayload",
		createUserList:"CreateUserListPayload",
		declineTopicSuggestion:"DeclineTopicSuggestionPayload",
		deleteBranchProtectionRule:"DeleteBranchProtectionRulePayload",
		deleteDeployment:"DeleteDeploymentPayload",
		deleteDiscussion:"DeleteDiscussionPayload",
		deleteDiscussionComment:"DeleteDiscussionCommentPayload",
		deleteEnvironment:"DeleteEnvironmentPayload",
		deleteIpAllowListEntry:"DeleteIpAllowListEntryPayload",
		deleteIssue:"DeleteIssuePayload",
		deleteIssueComment:"DeleteIssueCommentPayload",
		deleteLabel:"DeleteLabelPayload",
		deleteLinkedBranch:"DeleteLinkedBranchPayload",
		deletePackageVersion:"DeletePackageVersionPayload",
		deleteProject:"DeleteProjectPayload",
		deleteProjectCard:"DeleteProjectCardPayload",
		deleteProjectColumn:"DeleteProjectColumnPayload",
		deleteProjectV2:"DeleteProjectV2Payload",
		deleteProjectV2Field:"DeleteProjectV2FieldPayload",
		deleteProjectV2Item:"DeleteProjectV2ItemPayload",
		deleteProjectV2StatusUpdate:"DeleteProjectV2StatusUpdatePayload",
		deleteProjectV2Workflow:"DeleteProjectV2WorkflowPayload",
		deletePullRequestReview:"DeletePullRequestReviewPayload",
		deletePullRequestReviewComment:"DeletePullRequestReviewCommentPayload",
		deleteRef:"DeleteRefPayload",
		deleteRepositoryRuleset:"DeleteRepositoryRulesetPayload",
		deleteTeamDiscussion:"DeleteTeamDiscussionPayload",
		deleteTeamDiscussionComment:"DeleteTeamDiscussionCommentPayload",
		deleteUserList:"DeleteUserListPayload",
		deleteVerifiableDomain:"DeleteVerifiableDomainPayload",
		dequeuePullRequest:"DequeuePullRequestPayload",
		disablePullRequestAutoMerge:"DisablePullRequestAutoMergePayload",
		dismissPullRequestReview:"DismissPullRequestReviewPayload",
		dismissRepositoryVulnerabilityAlert:"DismissRepositoryVulnerabilityAlertPayload",
		enablePullRequestAutoMerge:"EnablePullRequestAutoMergePayload",
		enqueuePullRequest:"EnqueuePullRequestPayload",
		followOrganization:"FollowOrganizationPayload",
		followUser:"FollowUserPayload",
		grantEnterpriseOrganizationsMigratorRole:"GrantEnterpriseOrganizationsMigratorRolePayload",
		grantMigratorRole:"GrantMigratorRolePayload",
		importProject:"ImportProjectPayload",
		inviteEnterpriseAdmin:"InviteEnterpriseAdminPayload",
		inviteEnterpriseMember:"InviteEnterpriseMemberPayload",
		linkProjectV2ToRepository:"LinkProjectV2ToRepositoryPayload",
		linkProjectV2ToTeam:"LinkProjectV2ToTeamPayload",
		linkRepositoryToProject:"LinkRepositoryToProjectPayload",
		lockLockable:"LockLockablePayload",
		markDiscussionCommentAsAnswer:"MarkDiscussionCommentAsAnswerPayload",
		markFileAsViewed:"MarkFileAsViewedPayload",
		markNotificationAsDone:"MarkNotificationAsDonePayload",
		markProjectV2AsTemplate:"MarkProjectV2AsTemplatePayload",
		markPullRequestReadyForReview:"MarkPullRequestReadyForReviewPayload",
		mergeBranch:"MergeBranchPayload",
		mergePullRequest:"MergePullRequestPayload",
		minimizeComment:"MinimizeCommentPayload",
		moveProjectCard:"MoveProjectCardPayload",
		moveProjectColumn:"MoveProjectColumnPayload",
		pinEnvironment:"PinEnvironmentPayload",
		pinIssue:"PinIssuePayload",
		publishSponsorsTier:"PublishSponsorsTierPayload",
		regenerateEnterpriseIdentityProviderRecoveryCodes:"RegenerateEnterpriseIdentityProviderRecoveryCodesPayload",
		regenerateVerifiableDomainToken:"RegenerateVerifiableDomainTokenPayload",
		rejectDeployments:"RejectDeploymentsPayload",
		removeAssigneesFromAssignable:"RemoveAssigneesFromAssignablePayload",
		removeEnterpriseAdmin:"RemoveEnterpriseAdminPayload",
		removeEnterpriseIdentityProvider:"RemoveEnterpriseIdentityProviderPayload",
		removeEnterpriseMember:"RemoveEnterpriseMemberPayload",
		removeEnterpriseOrganization:"RemoveEnterpriseOrganizationPayload",
		removeEnterpriseSupportEntitlement:"RemoveEnterpriseSupportEntitlementPayload",
		removeLabelsFromLabelable:"RemoveLabelsFromLabelablePayload",
		removeOutsideCollaborator:"RemoveOutsideCollaboratorPayload",
		removeReaction:"RemoveReactionPayload",
		removeStar:"RemoveStarPayload",
		removeSubIssue:"RemoveSubIssuePayload",
		removeUpvote:"RemoveUpvotePayload",
		reopenDiscussion:"ReopenDiscussionPayload",
		reopenIssue:"ReopenIssuePayload",
		reopenPullRequest:"ReopenPullRequestPayload",
		reorderEnvironment:"ReorderEnvironmentPayload",
		reprioritizeSubIssue:"ReprioritizeSubIssuePayload",
		requestReviews:"RequestReviewsPayload",
		rerequestCheckSuite:"RerequestCheckSuitePayload",
		resolveReviewThread:"ResolveReviewThreadPayload",
		retireSponsorsTier:"RetireSponsorsTierPayload",
		revertPullRequest:"RevertPullRequestPayload",
		revokeEnterpriseOrganizationsMigratorRole:"RevokeEnterpriseOrganizationsMigratorRolePayload",
		revokeMigratorRole:"RevokeMigratorRolePayload",
		setEnterpriseIdentityProvider:"SetEnterpriseIdentityProviderPayload",
		setOrganizationInteractionLimit:"SetOrganizationInteractionLimitPayload",
		setRepositoryInteractionLimit:"SetRepositoryInteractionLimitPayload",
		setUserInteractionLimit:"SetUserInteractionLimitPayload",
		startOrganizationMigration:"StartOrganizationMigrationPayload",
		startRepositoryMigration:"StartRepositoryMigrationPayload",
		submitPullRequestReview:"SubmitPullRequestReviewPayload",
		transferEnterpriseOrganization:"TransferEnterpriseOrganizationPayload",
		transferIssue:"TransferIssuePayload",
		unarchiveProjectV2Item:"UnarchiveProjectV2ItemPayload",
		unarchiveRepository:"UnarchiveRepositoryPayload",
		unfollowOrganization:"UnfollowOrganizationPayload",
		unfollowUser:"UnfollowUserPayload",
		unlinkProjectV2FromRepository:"UnlinkProjectV2FromRepositoryPayload",
		unlinkProjectV2FromTeam:"UnlinkProjectV2FromTeamPayload",
		unlinkRepositoryFromProject:"UnlinkRepositoryFromProjectPayload",
		unlockLockable:"UnlockLockablePayload",
		unmarkDiscussionCommentAsAnswer:"UnmarkDiscussionCommentAsAnswerPayload",
		unmarkFileAsViewed:"UnmarkFileAsViewedPayload",
		unmarkIssueAsDuplicate:"UnmarkIssueAsDuplicatePayload",
		unmarkProjectV2AsTemplate:"UnmarkProjectV2AsTemplatePayload",
		unminimizeComment:"UnminimizeCommentPayload",
		unpinIssue:"UnpinIssuePayload",
		unresolveReviewThread:"UnresolveReviewThreadPayload",
		unsubscribeFromNotifications:"UnsubscribeFromNotificationsPayload",
		updateBranchProtectionRule:"UpdateBranchProtectionRulePayload",
		updateCheckRun:"UpdateCheckRunPayload",
		updateCheckSuitePreferences:"UpdateCheckSuitePreferencesPayload",
		updateDiscussion:"UpdateDiscussionPayload",
		updateDiscussionComment:"UpdateDiscussionCommentPayload",
		updateEnterpriseAdministratorRole:"UpdateEnterpriseAdministratorRolePayload",
		updateEnterpriseAllowPrivateRepositoryForkingSetting:"UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload",
		updateEnterpriseDefaultRepositoryPermissionSetting:"UpdateEnterpriseDefaultRepositoryPermissionSettingPayload",
		updateEnterpriseDeployKeySetting:"UpdateEnterpriseDeployKeySettingPayload",
		updateEnterpriseMembersCanChangeRepositoryVisibilitySetting:"UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload",
		updateEnterpriseMembersCanCreateRepositoriesSetting:"UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload",
		updateEnterpriseMembersCanDeleteIssuesSetting:"UpdateEnterpriseMembersCanDeleteIssuesSettingPayload",
		updateEnterpriseMembersCanDeleteRepositoriesSetting:"UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload",
		updateEnterpriseMembersCanInviteCollaboratorsSetting:"UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload",
		updateEnterpriseMembersCanMakePurchasesSetting:"UpdateEnterpriseMembersCanMakePurchasesSettingPayload",
		updateEnterpriseMembersCanUpdateProtectedBranchesSetting:"UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload",
		updateEnterpriseMembersCanViewDependencyInsightsSetting:"UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload",
		updateEnterpriseOrganizationProjectsSetting:"UpdateEnterpriseOrganizationProjectsSettingPayload",
		updateEnterpriseOwnerOrganizationRole:"UpdateEnterpriseOwnerOrganizationRolePayload",
		updateEnterpriseProfile:"UpdateEnterpriseProfilePayload",
		updateEnterpriseRepositoryProjectsSetting:"UpdateEnterpriseRepositoryProjectsSettingPayload",
		updateEnterpriseTeamDiscussionsSetting:"UpdateEnterpriseTeamDiscussionsSettingPayload",
		updateEnterpriseTwoFactorAuthenticationDisallowedMethodsSetting:"UpdateEnterpriseTwoFactorAuthenticationDisallowedMethodsSettingPayload",
		updateEnterpriseTwoFactorAuthenticationRequiredSetting:"UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload",
		updateEnvironment:"UpdateEnvironmentPayload",
		updateIpAllowListEnabledSetting:"UpdateIpAllowListEnabledSettingPayload",
		updateIpAllowListEntry:"UpdateIpAllowListEntryPayload",
		updateIpAllowListForInstalledAppsEnabledSetting:"UpdateIpAllowListForInstalledAppsEnabledSettingPayload",
		updateIssue:"UpdateIssuePayload",
		updateIssueComment:"UpdateIssueCommentPayload",
		updateLabel:"UpdateLabelPayload",
		updateNotificationRestrictionSetting:"UpdateNotificationRestrictionSettingPayload",
		updateOrganizationAllowPrivateRepositoryForkingSetting:"UpdateOrganizationAllowPrivateRepositoryForkingSettingPayload",
		updateOrganizationWebCommitSignoffSetting:"UpdateOrganizationWebCommitSignoffSettingPayload",
		updatePatreonSponsorability:"UpdatePatreonSponsorabilityPayload",
		updateProject:"UpdateProjectPayload",
		updateProjectCard:"UpdateProjectCardPayload",
		updateProjectColumn:"UpdateProjectColumnPayload",
		updateProjectV2:"UpdateProjectV2Payload",
		updateProjectV2Collaborators:"UpdateProjectV2CollaboratorsPayload",
		updateProjectV2DraftIssue:"UpdateProjectV2DraftIssuePayload",
		updateProjectV2Field:"UpdateProjectV2FieldPayload",
		updateProjectV2ItemFieldValue:"UpdateProjectV2ItemFieldValuePayload",
		updateProjectV2ItemPosition:"UpdateProjectV2ItemPositionPayload",
		updateProjectV2StatusUpdate:"UpdateProjectV2StatusUpdatePayload",
		updatePullRequest:"UpdatePullRequestPayload",
		updatePullRequestBranch:"UpdatePullRequestBranchPayload",
		updatePullRequestReview:"UpdatePullRequestReviewPayload",
		updatePullRequestReviewComment:"UpdatePullRequestReviewCommentPayload",
		updateRef:"UpdateRefPayload",
		updateRefs:"UpdateRefsPayload",
		updateRepository:"UpdateRepositoryPayload",
		updateRepositoryRuleset:"UpdateRepositoryRulesetPayload",
		updateRepositoryWebCommitSignoffSetting:"UpdateRepositoryWebCommitSignoffSettingPayload",
		updateSponsorshipPreferences:"UpdateSponsorshipPreferencesPayload",
		updateSubscription:"UpdateSubscriptionPayload",
		updateTeamDiscussion:"UpdateTeamDiscussionPayload",
		updateTeamDiscussionComment:"UpdateTeamDiscussionCommentPayload",
		updateTeamReviewAssignment:"UpdateTeamReviewAssignmentPayload",
		updateTeamsRepository:"UpdateTeamsRepositoryPayload",
		updateTopics:"UpdateTopicsPayload",
		updateUserList:"UpdateUserListPayload",
		updateUserListsForItem:"UpdateUserListsForItemPayload",
		verifyVerifiableDomain:"VerifyVerifiableDomainPayload"
	},
	Node:{
		"...on AddedToMergeQueueEvent": "AddedToMergeQueueEvent",
		"...on AddedToProjectEvent": "AddedToProjectEvent",
		"...on App": "App",
		"...on AssignedEvent": "AssignedEvent",
		"...on AutoMergeDisabledEvent": "AutoMergeDisabledEvent",
		"...on AutoMergeEnabledEvent": "AutoMergeEnabledEvent",
		"...on AutoRebaseEnabledEvent": "AutoRebaseEnabledEvent",
		"...on AutoSquashEnabledEvent": "AutoSquashEnabledEvent",
		"...on AutomaticBaseChangeFailedEvent": "AutomaticBaseChangeFailedEvent",
		"...on AutomaticBaseChangeSucceededEvent": "AutomaticBaseChangeSucceededEvent",
		"...on BaseRefChangedEvent": "BaseRefChangedEvent",
		"...on BaseRefDeletedEvent": "BaseRefDeletedEvent",
		"...on BaseRefForcePushedEvent": "BaseRefForcePushedEvent",
		"...on Blob": "Blob",
		"...on Bot": "Bot",
		"...on BranchProtectionRule": "BranchProtectionRule",
		"...on BypassForcePushAllowance": "BypassForcePushAllowance",
		"...on BypassPullRequestAllowance": "BypassPullRequestAllowance",
		"...on CWE": "CWE",
		"...on CheckRun": "CheckRun",
		"...on CheckSuite": "CheckSuite",
		"...on ClosedEvent": "ClosedEvent",
		"...on CodeOfConduct": "CodeOfConduct",
		"...on CommentDeletedEvent": "CommentDeletedEvent",
		"...on Commit": "Commit",
		"...on CommitComment": "CommitComment",
		"...on CommitCommentThread": "CommitCommentThread",
		"...on Comparison": "Comparison",
		"...on ConnectedEvent": "ConnectedEvent",
		"...on ConvertToDraftEvent": "ConvertToDraftEvent",
		"...on ConvertedNoteToIssueEvent": "ConvertedNoteToIssueEvent",
		"...on ConvertedToDiscussionEvent": "ConvertedToDiscussionEvent",
		"...on CrossReferencedEvent": "CrossReferencedEvent",
		"...on DemilestonedEvent": "DemilestonedEvent",
		"...on DependencyGraphManifest": "DependencyGraphManifest",
		"...on DeployKey": "DeployKey",
		"...on DeployedEvent": "DeployedEvent",
		"...on Deployment": "Deployment",
		"...on DeploymentEnvironmentChangedEvent": "DeploymentEnvironmentChangedEvent",
		"...on DeploymentReview": "DeploymentReview",
		"...on DeploymentStatus": "DeploymentStatus",
		"...on DisconnectedEvent": "DisconnectedEvent",
		"...on Discussion": "Discussion",
		"...on DiscussionCategory": "DiscussionCategory",
		"...on DiscussionComment": "DiscussionComment",
		"...on DiscussionPoll": "DiscussionPoll",
		"...on DiscussionPollOption": "DiscussionPollOption",
		"...on DraftIssue": "DraftIssue",
		"...on Enterprise": "Enterprise",
		"...on EnterpriseAdministratorInvitation": "EnterpriseAdministratorInvitation",
		"...on EnterpriseIdentityProvider": "EnterpriseIdentityProvider",
		"...on EnterpriseMemberInvitation": "EnterpriseMemberInvitation",
		"...on EnterpriseRepositoryInfo": "EnterpriseRepositoryInfo",
		"...on EnterpriseServerInstallation": "EnterpriseServerInstallation",
		"...on EnterpriseServerUserAccount": "EnterpriseServerUserAccount",
		"...on EnterpriseServerUserAccountEmail": "EnterpriseServerUserAccountEmail",
		"...on EnterpriseServerUserAccountsUpload": "EnterpriseServerUserAccountsUpload",
		"...on EnterpriseUserAccount": "EnterpriseUserAccount",
		"...on Environment": "Environment",
		"...on ExternalIdentity": "ExternalIdentity",
		"...on Gist": "Gist",
		"...on GistComment": "GistComment",
		"...on HeadRefDeletedEvent": "HeadRefDeletedEvent",
		"...on HeadRefForcePushedEvent": "HeadRefForcePushedEvent",
		"...on HeadRefRestoredEvent": "HeadRefRestoredEvent",
		"...on IpAllowListEntry": "IpAllowListEntry",
		"...on Issue": "Issue",
		"...on IssueComment": "IssueComment",
		"...on Label": "Label",
		"...on LabeledEvent": "LabeledEvent",
		"...on Language": "Language",
		"...on License": "License",
		"...on LinkedBranch": "LinkedBranch",
		"...on LockedEvent": "LockedEvent",
		"...on Mannequin": "Mannequin",
		"...on MarkedAsDuplicateEvent": "MarkedAsDuplicateEvent",
		"...on MarketplaceCategory": "MarketplaceCategory",
		"...on MarketplaceListing": "MarketplaceListing",
		"...on MemberFeatureRequestNotification": "MemberFeatureRequestNotification",
		"...on MembersCanDeleteReposClearAuditEntry": "MembersCanDeleteReposClearAuditEntry",
		"...on MembersCanDeleteReposDisableAuditEntry": "MembersCanDeleteReposDisableAuditEntry",
		"...on MembersCanDeleteReposEnableAuditEntry": "MembersCanDeleteReposEnableAuditEntry",
		"...on MentionedEvent": "MentionedEvent",
		"...on MergeQueue": "MergeQueue",
		"...on MergeQueueEntry": "MergeQueueEntry",
		"...on MergedEvent": "MergedEvent",
		"...on MigrationSource": "MigrationSource",
		"...on Milestone": "Milestone",
		"...on MilestonedEvent": "MilestonedEvent",
		"...on MovedColumnsInProjectEvent": "MovedColumnsInProjectEvent",
		"...on OIDCProvider": "OIDCProvider",
		"...on OauthApplicationCreateAuditEntry": "OauthApplicationCreateAuditEntry",
		"...on OrgAddBillingManagerAuditEntry": "OrgAddBillingManagerAuditEntry",
		"...on OrgAddMemberAuditEntry": "OrgAddMemberAuditEntry",
		"...on OrgBlockUserAuditEntry": "OrgBlockUserAuditEntry",
		"...on OrgConfigDisableCollaboratorsOnlyAuditEntry": "OrgConfigDisableCollaboratorsOnlyAuditEntry",
		"...on OrgConfigEnableCollaboratorsOnlyAuditEntry": "OrgConfigEnableCollaboratorsOnlyAuditEntry",
		"...on OrgCreateAuditEntry": "OrgCreateAuditEntry",
		"...on OrgDisableOauthAppRestrictionsAuditEntry": "OrgDisableOauthAppRestrictionsAuditEntry",
		"...on OrgDisableSamlAuditEntry": "OrgDisableSamlAuditEntry",
		"...on OrgDisableTwoFactorRequirementAuditEntry": "OrgDisableTwoFactorRequirementAuditEntry",
		"...on OrgEnableOauthAppRestrictionsAuditEntry": "OrgEnableOauthAppRestrictionsAuditEntry",
		"...on OrgEnableSamlAuditEntry": "OrgEnableSamlAuditEntry",
		"...on OrgEnableTwoFactorRequirementAuditEntry": "OrgEnableTwoFactorRequirementAuditEntry",
		"...on OrgInviteMemberAuditEntry": "OrgInviteMemberAuditEntry",
		"...on OrgInviteToBusinessAuditEntry": "OrgInviteToBusinessAuditEntry",
		"...on OrgOauthAppAccessApprovedAuditEntry": "OrgOauthAppAccessApprovedAuditEntry",
		"...on OrgOauthAppAccessBlockedAuditEntry": "OrgOauthAppAccessBlockedAuditEntry",
		"...on OrgOauthAppAccessDeniedAuditEntry": "OrgOauthAppAccessDeniedAuditEntry",
		"...on OrgOauthAppAccessRequestedAuditEntry": "OrgOauthAppAccessRequestedAuditEntry",
		"...on OrgOauthAppAccessUnblockedAuditEntry": "OrgOauthAppAccessUnblockedAuditEntry",
		"...on OrgRemoveBillingManagerAuditEntry": "OrgRemoveBillingManagerAuditEntry",
		"...on OrgRemoveMemberAuditEntry": "OrgRemoveMemberAuditEntry",
		"...on OrgRemoveOutsideCollaboratorAuditEntry": "OrgRemoveOutsideCollaboratorAuditEntry",
		"...on OrgRestoreMemberAuditEntry": "OrgRestoreMemberAuditEntry",
		"...on OrgUnblockUserAuditEntry": "OrgUnblockUserAuditEntry",
		"...on OrgUpdateDefaultRepositoryPermissionAuditEntry": "OrgUpdateDefaultRepositoryPermissionAuditEntry",
		"...on OrgUpdateMemberAuditEntry": "OrgUpdateMemberAuditEntry",
		"...on OrgUpdateMemberRepositoryCreationPermissionAuditEntry": "OrgUpdateMemberRepositoryCreationPermissionAuditEntry",
		"...on OrgUpdateMemberRepositoryInvitationPermissionAuditEntry": "OrgUpdateMemberRepositoryInvitationPermissionAuditEntry",
		"...on Organization": "Organization",
		"...on OrganizationIdentityProvider": "OrganizationIdentityProvider",
		"...on OrganizationInvitation": "OrganizationInvitation",
		"...on OrganizationMigration": "OrganizationMigration",
		"...on Package": "Package",
		"...on PackageFile": "PackageFile",
		"...on PackageTag": "PackageTag",
		"...on PackageVersion": "PackageVersion",
		"...on PinnedDiscussion": "PinnedDiscussion",
		"...on PinnedEnvironment": "PinnedEnvironment",
		"...on PinnedEvent": "PinnedEvent",
		"...on PinnedIssue": "PinnedIssue",
		"...on PrivateRepositoryForkingDisableAuditEntry": "PrivateRepositoryForkingDisableAuditEntry",
		"...on PrivateRepositoryForkingEnableAuditEntry": "PrivateRepositoryForkingEnableAuditEntry",
		"...on Project": "Project",
		"...on ProjectCard": "ProjectCard",
		"...on ProjectColumn": "ProjectColumn",
		"...on ProjectV2": "ProjectV2",
		"...on ProjectV2Field": "ProjectV2Field",
		"...on ProjectV2Item": "ProjectV2Item",
		"...on ProjectV2ItemFieldDateValue": "ProjectV2ItemFieldDateValue",
		"...on ProjectV2ItemFieldIterationValue": "ProjectV2ItemFieldIterationValue",
		"...on ProjectV2ItemFieldNumberValue": "ProjectV2ItemFieldNumberValue",
		"...on ProjectV2ItemFieldSingleSelectValue": "ProjectV2ItemFieldSingleSelectValue",
		"...on ProjectV2ItemFieldTextValue": "ProjectV2ItemFieldTextValue",
		"...on ProjectV2IterationField": "ProjectV2IterationField",
		"...on ProjectV2SingleSelectField": "ProjectV2SingleSelectField",
		"...on ProjectV2StatusUpdate": "ProjectV2StatusUpdate",
		"...on ProjectV2View": "ProjectV2View",
		"...on ProjectV2Workflow": "ProjectV2Workflow",
		"...on PublicKey": "PublicKey",
		"...on PullRequest": "PullRequest",
		"...on PullRequestCommit": "PullRequestCommit",
		"...on PullRequestCommitCommentThread": "PullRequestCommitCommentThread",
		"...on PullRequestReview": "PullRequestReview",
		"...on PullRequestReviewComment": "PullRequestReviewComment",
		"...on PullRequestReviewThread": "PullRequestReviewThread",
		"...on PullRequestThread": "PullRequestThread",
		"...on Push": "Push",
		"...on PushAllowance": "PushAllowance",
		"...on Query": "Query",
		"...on Reaction": "Reaction",
		"...on ReadyForReviewEvent": "ReadyForReviewEvent",
		"...on Ref": "Ref",
		"...on ReferencedEvent": "ReferencedEvent",
		"...on Release": "Release",
		"...on ReleaseAsset": "ReleaseAsset",
		"...on RemovedFromMergeQueueEvent": "RemovedFromMergeQueueEvent",
		"...on RemovedFromProjectEvent": "RemovedFromProjectEvent",
		"...on RenamedTitleEvent": "RenamedTitleEvent",
		"...on ReopenedEvent": "ReopenedEvent",
		"...on RepoAccessAuditEntry": "RepoAccessAuditEntry",
		"...on RepoAddMemberAuditEntry": "RepoAddMemberAuditEntry",
		"...on RepoAddTopicAuditEntry": "RepoAddTopicAuditEntry",
		"...on RepoArchivedAuditEntry": "RepoArchivedAuditEntry",
		"...on RepoChangeMergeSettingAuditEntry": "RepoChangeMergeSettingAuditEntry",
		"...on RepoConfigDisableAnonymousGitAccessAuditEntry": "RepoConfigDisableAnonymousGitAccessAuditEntry",
		"...on RepoConfigDisableCollaboratorsOnlyAuditEntry": "RepoConfigDisableCollaboratorsOnlyAuditEntry",
		"...on RepoConfigDisableContributorsOnlyAuditEntry": "RepoConfigDisableContributorsOnlyAuditEntry",
		"...on RepoConfigDisableSockpuppetDisallowedAuditEntry": "RepoConfigDisableSockpuppetDisallowedAuditEntry",
		"...on RepoConfigEnableAnonymousGitAccessAuditEntry": "RepoConfigEnableAnonymousGitAccessAuditEntry",
		"...on RepoConfigEnableCollaboratorsOnlyAuditEntry": "RepoConfigEnableCollaboratorsOnlyAuditEntry",
		"...on RepoConfigEnableContributorsOnlyAuditEntry": "RepoConfigEnableContributorsOnlyAuditEntry",
		"...on RepoConfigEnableSockpuppetDisallowedAuditEntry": "RepoConfigEnableSockpuppetDisallowedAuditEntry",
		"...on RepoConfigLockAnonymousGitAccessAuditEntry": "RepoConfigLockAnonymousGitAccessAuditEntry",
		"...on RepoConfigUnlockAnonymousGitAccessAuditEntry": "RepoConfigUnlockAnonymousGitAccessAuditEntry",
		"...on RepoCreateAuditEntry": "RepoCreateAuditEntry",
		"...on RepoDestroyAuditEntry": "RepoDestroyAuditEntry",
		"...on RepoRemoveMemberAuditEntry": "RepoRemoveMemberAuditEntry",
		"...on RepoRemoveTopicAuditEntry": "RepoRemoveTopicAuditEntry",
		"...on Repository": "Repository",
		"...on RepositoryInvitation": "RepositoryInvitation",
		"...on RepositoryMigration": "RepositoryMigration",
		"...on RepositoryRule": "RepositoryRule",
		"...on RepositoryRuleset": "RepositoryRuleset",
		"...on RepositoryRulesetBypassActor": "RepositoryRulesetBypassActor",
		"...on RepositoryTopic": "RepositoryTopic",
		"...on RepositoryVisibilityChangeDisableAuditEntry": "RepositoryVisibilityChangeDisableAuditEntry",
		"...on RepositoryVisibilityChangeEnableAuditEntry": "RepositoryVisibilityChangeEnableAuditEntry",
		"...on RepositoryVulnerabilityAlert": "RepositoryVulnerabilityAlert",
		"...on ReviewDismissalAllowance": "ReviewDismissalAllowance",
		"...on ReviewDismissedEvent": "ReviewDismissedEvent",
		"...on ReviewRequest": "ReviewRequest",
		"...on ReviewRequestRemovedEvent": "ReviewRequestRemovedEvent",
		"...on ReviewRequestedEvent": "ReviewRequestedEvent",
		"...on SavedReply": "SavedReply",
		"...on SecurityAdvisory": "SecurityAdvisory",
		"...on SponsorsActivity": "SponsorsActivity",
		"...on SponsorsListing": "SponsorsListing",
		"...on SponsorsListingFeaturedItem": "SponsorsListingFeaturedItem",
		"...on SponsorsTier": "SponsorsTier",
		"...on Sponsorship": "Sponsorship",
		"...on SponsorshipNewsletter": "SponsorshipNewsletter",
		"...on Status": "Status",
		"...on StatusCheckRollup": "StatusCheckRollup",
		"...on StatusContext": "StatusContext",
		"...on SubscribedEvent": "SubscribedEvent",
		"...on Tag": "Tag",
		"...on Team": "Team",
		"...on TeamAddMemberAuditEntry": "TeamAddMemberAuditEntry",
		"...on TeamAddRepositoryAuditEntry": "TeamAddRepositoryAuditEntry",
		"...on TeamChangeParentTeamAuditEntry": "TeamChangeParentTeamAuditEntry",
		"...on TeamDiscussion": "TeamDiscussion",
		"...on TeamDiscussionComment": "TeamDiscussionComment",
		"...on TeamRemoveMemberAuditEntry": "TeamRemoveMemberAuditEntry",
		"...on TeamRemoveRepositoryAuditEntry": "TeamRemoveRepositoryAuditEntry",
		"...on Topic": "Topic",
		"...on TransferredEvent": "TransferredEvent",
		"...on Tree": "Tree",
		"...on UnassignedEvent": "UnassignedEvent",
		"...on UnlabeledEvent": "UnlabeledEvent",
		"...on UnlockedEvent": "UnlockedEvent",
		"...on UnmarkedAsDuplicateEvent": "UnmarkedAsDuplicateEvent",
		"...on UnpinnedEvent": "UnpinnedEvent",
		"...on UnsubscribedEvent": "UnsubscribedEvent",
		"...on User": "User",
		"...on UserBlockedEvent": "UserBlockedEvent",
		"...on UserContentEdit": "UserContentEdit",
		"...on UserList": "UserList",
		"...on UserStatus": "UserStatus",
		"...on VerifiableDomain": "VerifiableDomain",
		"...on Workflow": "Workflow",
		"...on WorkflowRun": "WorkflowRun",
		"...on WorkflowRunFile": "WorkflowRunFile",
		id:"ID"
	},
	OIDCProvider:{
		enterprise:"Enterprise",
		externalIdentities:"ExternalIdentityConnection",
		id:"ID",
		providerType:"OIDCProviderType",
		tenantId:"String"
	},
	OauthApplicationAuditEntryData:{
		"...on OauthApplicationCreateAuditEntry": "OauthApplicationCreateAuditEntry",
		"...on OrgOauthAppAccessApprovedAuditEntry": "OrgOauthAppAccessApprovedAuditEntry",
		"...on OrgOauthAppAccessBlockedAuditEntry": "OrgOauthAppAccessBlockedAuditEntry",
		"...on OrgOauthAppAccessDeniedAuditEntry": "OrgOauthAppAccessDeniedAuditEntry",
		"...on OrgOauthAppAccessRequestedAuditEntry": "OrgOauthAppAccessRequestedAuditEntry",
		"...on OrgOauthAppAccessUnblockedAuditEntry": "OrgOauthAppAccessUnblockedAuditEntry",
		oauthApplicationName:"String",
		oauthApplicationResourcePath:"URI",
		oauthApplicationUrl:"URI"
	},
	OauthApplicationCreateAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		applicationUrl:"URI",
		callbackUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		oauthApplicationName:"String",
		oauthApplicationResourcePath:"URI",
		oauthApplicationUrl:"URI",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		rateLimit:"Int",
		state:"OauthApplicationCreateAuditEntryState",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	OrgAddBillingManagerAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		invitationEmail:"String",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	OrgAddMemberAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		permission:"OrgAddMemberAuditEntryPermission",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	OrgBlockUserAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		blockedUser:"User",
		blockedUserName:"String",
		blockedUserResourcePath:"URI",
		blockedUserUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	OrgConfigDisableCollaboratorsOnlyAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	OrgConfigEnableCollaboratorsOnlyAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	OrgCreateAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		billingPlan:"OrgCreateAuditEntryBillingPlan",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	OrgDisableOauthAppRestrictionsAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	OrgDisableSamlAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		digestMethodUrl:"URI",
		id:"ID",
		issuerUrl:"URI",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		signatureMethodUrl:"URI",
		singleSignOnUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	OrgDisableTwoFactorRequirementAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	OrgEnableOauthAppRestrictionsAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	OrgEnableSamlAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		digestMethodUrl:"URI",
		id:"ID",
		issuerUrl:"URI",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		signatureMethodUrl:"URI",
		singleSignOnUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	OrgEnableTwoFactorRequirementAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	OrgInviteMemberAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		email:"String",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationInvitation:"OrganizationInvitation",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	OrgInviteToBusinessAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		enterpriseResourcePath:"URI",
		enterpriseSlug:"String",
		enterpriseUrl:"URI",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	OrgOauthAppAccessApprovedAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		oauthApplicationName:"String",
		oauthApplicationResourcePath:"URI",
		oauthApplicationUrl:"URI",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	OrgOauthAppAccessBlockedAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		oauthApplicationName:"String",
		oauthApplicationResourcePath:"URI",
		oauthApplicationUrl:"URI",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	OrgOauthAppAccessDeniedAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		oauthApplicationName:"String",
		oauthApplicationResourcePath:"URI",
		oauthApplicationUrl:"URI",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	OrgOauthAppAccessRequestedAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		oauthApplicationName:"String",
		oauthApplicationResourcePath:"URI",
		oauthApplicationUrl:"URI",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	OrgOauthAppAccessUnblockedAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		oauthApplicationName:"String",
		oauthApplicationResourcePath:"URI",
		oauthApplicationUrl:"URI",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	OrgRemoveBillingManagerAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		reason:"OrgRemoveBillingManagerAuditEntryReason",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	OrgRemoveMemberAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		membershipTypes:"OrgRemoveMemberAuditEntryMembershipType",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		reason:"OrgRemoveMemberAuditEntryReason",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	OrgRemoveOutsideCollaboratorAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		membershipTypes:"OrgRemoveOutsideCollaboratorAuditEntryMembershipType",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		reason:"OrgRemoveOutsideCollaboratorAuditEntryReason",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	OrgRestoreMemberAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		restoredCustomEmailRoutingsCount:"Int",
		restoredIssueAssignmentsCount:"Int",
		restoredMemberships:"OrgRestoreMemberAuditEntryMembership",
		restoredMembershipsCount:"Int",
		restoredRepositoriesCount:"Int",
		restoredRepositoryStarsCount:"Int",
		restoredRepositoryWatchesCount:"Int",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	OrgRestoreMemberAuditEntryMembership:{
		"...on OrgRestoreMemberMembershipOrganizationAuditEntryData":"OrgRestoreMemberMembershipOrganizationAuditEntryData",
		"...on OrgRestoreMemberMembershipRepositoryAuditEntryData":"OrgRestoreMemberMembershipRepositoryAuditEntryData",
		"...on OrgRestoreMemberMembershipTeamAuditEntryData":"OrgRestoreMemberMembershipTeamAuditEntryData"
	},
	OrgRestoreMemberMembershipOrganizationAuditEntryData:{
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI"
	},
	OrgRestoreMemberMembershipRepositoryAuditEntryData:{
		repository:"Repository",
		repositoryName:"String",
		repositoryResourcePath:"URI",
		repositoryUrl:"URI"
	},
	OrgRestoreMemberMembershipTeamAuditEntryData:{
		team:"Team",
		teamName:"String",
		teamResourcePath:"URI",
		teamUrl:"URI"
	},
	OrgUnblockUserAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		blockedUser:"User",
		blockedUserName:"String",
		blockedUserResourcePath:"URI",
		blockedUserUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	OrgUpdateDefaultRepositoryPermissionAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		permission:"OrgUpdateDefaultRepositoryPermissionAuditEntryPermission",
		permissionWas:"OrgUpdateDefaultRepositoryPermissionAuditEntryPermission",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	OrgUpdateMemberAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		permission:"OrgUpdateMemberAuditEntryPermission",
		permissionWas:"OrgUpdateMemberAuditEntryPermission",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	OrgUpdateMemberRepositoryCreationPermissionAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		canCreateRepositories:"Boolean",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI",
		visibility:"OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility"
	},
	OrgUpdateMemberRepositoryInvitationPermissionAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		canInviteOutsideCollaboratorsToRepositories:"Boolean",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	Organization:{
		announcement:"String",
		announcementCreatedAt:"DateTime",
		announcementExpiresAt:"DateTime",
		announcementUserDismissible:"Boolean",
		anyPinnableItems:"Boolean",
		archivedAt:"DateTime",
		auditLog:"OrganizationAuditEntryConnection",
		avatarUrl:"URI",
		createdAt:"DateTime",
		databaseId:"Int",
		description:"String",
		descriptionHTML:"String",
		domains:"VerifiableDomainConnection",
		email:"String",
		enterpriseOwners:"OrganizationEnterpriseOwnerConnection",
		estimatedNextSponsorsPayoutInCents:"Int",
		hasSponsorsListing:"Boolean",
		id:"ID",
		interactionAbility:"RepositoryInteractionAbility",
		ipAllowListEnabledSetting:"IpAllowListEnabledSettingValue",
		ipAllowListEntries:"IpAllowListEntryConnection",
		ipAllowListForInstalledAppsEnabledSetting:"IpAllowListForInstalledAppsEnabledSettingValue",
		isSponsoredBy:"Boolean",
		isSponsoringViewer:"Boolean",
		isVerified:"Boolean",
		itemShowcase:"ProfileItemShowcase",
		lifetimeReceivedSponsorshipValues:"SponsorAndLifetimeValueConnection",
		location:"String",
		login:"String",
		mannequins:"MannequinConnection",
		memberStatuses:"UserStatusConnection",
		membersCanForkPrivateRepositories:"Boolean",
		membersWithRole:"OrganizationMemberConnection",
		monthlyEstimatedSponsorsIncomeInCents:"Int",
		name:"String",
		newTeamResourcePath:"URI",
		newTeamUrl:"URI",
		notificationDeliveryRestrictionEnabledSetting:"NotificationRestrictionSettingValue",
		organizationBillingEmail:"String",
		packages:"PackageConnection",
		pendingMembers:"UserConnection",
		pinnableItems:"PinnableItemConnection",
		pinnedItems:"PinnableItemConnection",
		pinnedItemsRemaining:"Int",
		project:"Project",
		projectV2:"ProjectV2",
		projects:"ProjectConnection",
		projectsResourcePath:"URI",
		projectsUrl:"URI",
		projectsV2:"ProjectV2Connection",
		recentProjects:"ProjectV2Connection",
		repositories:"RepositoryConnection",
		repository:"Repository",
		repositoryDiscussionComments:"DiscussionCommentConnection",
		repositoryDiscussions:"DiscussionConnection",
		repositoryMigrations:"RepositoryMigrationConnection",
		requiresTwoFactorAuthentication:"Boolean",
		resourcePath:"URI",
		ruleset:"RepositoryRuleset",
		rulesets:"RepositoryRulesetConnection",
		samlIdentityProvider:"OrganizationIdentityProvider",
		sponsoring:"SponsorConnection",
		sponsors:"SponsorConnection",
		sponsorsActivities:"SponsorsActivityConnection",
		sponsorsListing:"SponsorsListing",
		sponsorshipForViewerAsSponsor:"Sponsorship",
		sponsorshipForViewerAsSponsorable:"Sponsorship",
		sponsorshipNewsletters:"SponsorshipNewsletterConnection",
		sponsorshipsAsMaintainer:"SponsorshipConnection",
		sponsorshipsAsSponsor:"SponsorshipConnection",
		team:"Team",
		teams:"TeamConnection",
		teamsResourcePath:"URI",
		teamsUrl:"URI",
		totalSponsorshipAmountAsSponsorInCents:"Int",
		twitterUsername:"String",
		updatedAt:"DateTime",
		url:"URI",
		viewerCanAdminister:"Boolean",
		viewerCanChangePinnedItems:"Boolean",
		viewerCanCreateProjects:"Boolean",
		viewerCanCreateRepositories:"Boolean",
		viewerCanCreateTeams:"Boolean",
		viewerCanSponsor:"Boolean",
		viewerIsAMember:"Boolean",
		viewerIsFollowing:"Boolean",
		viewerIsSponsoring:"Boolean",
		webCommitSignoffRequired:"Boolean",
		websiteUrl:"URI"
	},
	OrganizationAuditEntry:{
		"...on MembersCanDeleteReposClearAuditEntry":"MembersCanDeleteReposClearAuditEntry",
		"...on MembersCanDeleteReposDisableAuditEntry":"MembersCanDeleteReposDisableAuditEntry",
		"...on MembersCanDeleteReposEnableAuditEntry":"MembersCanDeleteReposEnableAuditEntry",
		"...on OauthApplicationCreateAuditEntry":"OauthApplicationCreateAuditEntry",
		"...on OrgAddBillingManagerAuditEntry":"OrgAddBillingManagerAuditEntry",
		"...on OrgAddMemberAuditEntry":"OrgAddMemberAuditEntry",
		"...on OrgBlockUserAuditEntry":"OrgBlockUserAuditEntry",
		"...on OrgConfigDisableCollaboratorsOnlyAuditEntry":"OrgConfigDisableCollaboratorsOnlyAuditEntry",
		"...on OrgConfigEnableCollaboratorsOnlyAuditEntry":"OrgConfigEnableCollaboratorsOnlyAuditEntry",
		"...on OrgCreateAuditEntry":"OrgCreateAuditEntry",
		"...on OrgDisableOauthAppRestrictionsAuditEntry":"OrgDisableOauthAppRestrictionsAuditEntry",
		"...on OrgDisableSamlAuditEntry":"OrgDisableSamlAuditEntry",
		"...on OrgDisableTwoFactorRequirementAuditEntry":"OrgDisableTwoFactorRequirementAuditEntry",
		"...on OrgEnableOauthAppRestrictionsAuditEntry":"OrgEnableOauthAppRestrictionsAuditEntry",
		"...on OrgEnableSamlAuditEntry":"OrgEnableSamlAuditEntry",
		"...on OrgEnableTwoFactorRequirementAuditEntry":"OrgEnableTwoFactorRequirementAuditEntry",
		"...on OrgInviteMemberAuditEntry":"OrgInviteMemberAuditEntry",
		"...on OrgInviteToBusinessAuditEntry":"OrgInviteToBusinessAuditEntry",
		"...on OrgOauthAppAccessApprovedAuditEntry":"OrgOauthAppAccessApprovedAuditEntry",
		"...on OrgOauthAppAccessBlockedAuditEntry":"OrgOauthAppAccessBlockedAuditEntry",
		"...on OrgOauthAppAccessDeniedAuditEntry":"OrgOauthAppAccessDeniedAuditEntry",
		"...on OrgOauthAppAccessRequestedAuditEntry":"OrgOauthAppAccessRequestedAuditEntry",
		"...on OrgOauthAppAccessUnblockedAuditEntry":"OrgOauthAppAccessUnblockedAuditEntry",
		"...on OrgRemoveBillingManagerAuditEntry":"OrgRemoveBillingManagerAuditEntry",
		"...on OrgRemoveMemberAuditEntry":"OrgRemoveMemberAuditEntry",
		"...on OrgRemoveOutsideCollaboratorAuditEntry":"OrgRemoveOutsideCollaboratorAuditEntry",
		"...on OrgRestoreMemberAuditEntry":"OrgRestoreMemberAuditEntry",
		"...on OrgUnblockUserAuditEntry":"OrgUnblockUserAuditEntry",
		"...on OrgUpdateDefaultRepositoryPermissionAuditEntry":"OrgUpdateDefaultRepositoryPermissionAuditEntry",
		"...on OrgUpdateMemberAuditEntry":"OrgUpdateMemberAuditEntry",
		"...on OrgUpdateMemberRepositoryCreationPermissionAuditEntry":"OrgUpdateMemberRepositoryCreationPermissionAuditEntry",
		"...on OrgUpdateMemberRepositoryInvitationPermissionAuditEntry":"OrgUpdateMemberRepositoryInvitationPermissionAuditEntry",
		"...on PrivateRepositoryForkingDisableAuditEntry":"PrivateRepositoryForkingDisableAuditEntry",
		"...on PrivateRepositoryForkingEnableAuditEntry":"PrivateRepositoryForkingEnableAuditEntry",
		"...on RepoAccessAuditEntry":"RepoAccessAuditEntry",
		"...on RepoAddMemberAuditEntry":"RepoAddMemberAuditEntry",
		"...on RepoAddTopicAuditEntry":"RepoAddTopicAuditEntry",
		"...on RepoArchivedAuditEntry":"RepoArchivedAuditEntry",
		"...on RepoChangeMergeSettingAuditEntry":"RepoChangeMergeSettingAuditEntry",
		"...on RepoConfigDisableAnonymousGitAccessAuditEntry":"RepoConfigDisableAnonymousGitAccessAuditEntry",
		"...on RepoConfigDisableCollaboratorsOnlyAuditEntry":"RepoConfigDisableCollaboratorsOnlyAuditEntry",
		"...on RepoConfigDisableContributorsOnlyAuditEntry":"RepoConfigDisableContributorsOnlyAuditEntry",
		"...on RepoConfigDisableSockpuppetDisallowedAuditEntry":"RepoConfigDisableSockpuppetDisallowedAuditEntry",
		"...on RepoConfigEnableAnonymousGitAccessAuditEntry":"RepoConfigEnableAnonymousGitAccessAuditEntry",
		"...on RepoConfigEnableCollaboratorsOnlyAuditEntry":"RepoConfigEnableCollaboratorsOnlyAuditEntry",
		"...on RepoConfigEnableContributorsOnlyAuditEntry":"RepoConfigEnableContributorsOnlyAuditEntry",
		"...on RepoConfigEnableSockpuppetDisallowedAuditEntry":"RepoConfigEnableSockpuppetDisallowedAuditEntry",
		"...on RepoConfigLockAnonymousGitAccessAuditEntry":"RepoConfigLockAnonymousGitAccessAuditEntry",
		"...on RepoConfigUnlockAnonymousGitAccessAuditEntry":"RepoConfigUnlockAnonymousGitAccessAuditEntry",
		"...on RepoCreateAuditEntry":"RepoCreateAuditEntry",
		"...on RepoDestroyAuditEntry":"RepoDestroyAuditEntry",
		"...on RepoRemoveMemberAuditEntry":"RepoRemoveMemberAuditEntry",
		"...on RepoRemoveTopicAuditEntry":"RepoRemoveTopicAuditEntry",
		"...on RepositoryVisibilityChangeDisableAuditEntry":"RepositoryVisibilityChangeDisableAuditEntry",
		"...on RepositoryVisibilityChangeEnableAuditEntry":"RepositoryVisibilityChangeEnableAuditEntry",
		"...on TeamAddMemberAuditEntry":"TeamAddMemberAuditEntry",
		"...on TeamAddRepositoryAuditEntry":"TeamAddRepositoryAuditEntry",
		"...on TeamChangeParentTeamAuditEntry":"TeamChangeParentTeamAuditEntry",
		"...on TeamRemoveMemberAuditEntry":"TeamRemoveMemberAuditEntry",
		"...on TeamRemoveRepositoryAuditEntry":"TeamRemoveRepositoryAuditEntry"
	},
	OrganizationAuditEntryConnection:{
		edges:"OrganizationAuditEntryEdge",
		nodes:"OrganizationAuditEntry",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	OrganizationAuditEntryData:{
		"...on MembersCanDeleteReposClearAuditEntry": "MembersCanDeleteReposClearAuditEntry",
		"...on MembersCanDeleteReposDisableAuditEntry": "MembersCanDeleteReposDisableAuditEntry",
		"...on MembersCanDeleteReposEnableAuditEntry": "MembersCanDeleteReposEnableAuditEntry",
		"...on OauthApplicationCreateAuditEntry": "OauthApplicationCreateAuditEntry",
		"...on OrgAddBillingManagerAuditEntry": "OrgAddBillingManagerAuditEntry",
		"...on OrgAddMemberAuditEntry": "OrgAddMemberAuditEntry",
		"...on OrgBlockUserAuditEntry": "OrgBlockUserAuditEntry",
		"...on OrgConfigDisableCollaboratorsOnlyAuditEntry": "OrgConfigDisableCollaboratorsOnlyAuditEntry",
		"...on OrgConfigEnableCollaboratorsOnlyAuditEntry": "OrgConfigEnableCollaboratorsOnlyAuditEntry",
		"...on OrgCreateAuditEntry": "OrgCreateAuditEntry",
		"...on OrgDisableOauthAppRestrictionsAuditEntry": "OrgDisableOauthAppRestrictionsAuditEntry",
		"...on OrgDisableSamlAuditEntry": "OrgDisableSamlAuditEntry",
		"...on OrgDisableTwoFactorRequirementAuditEntry": "OrgDisableTwoFactorRequirementAuditEntry",
		"...on OrgEnableOauthAppRestrictionsAuditEntry": "OrgEnableOauthAppRestrictionsAuditEntry",
		"...on OrgEnableSamlAuditEntry": "OrgEnableSamlAuditEntry",
		"...on OrgEnableTwoFactorRequirementAuditEntry": "OrgEnableTwoFactorRequirementAuditEntry",
		"...on OrgInviteMemberAuditEntry": "OrgInviteMemberAuditEntry",
		"...on OrgInviteToBusinessAuditEntry": "OrgInviteToBusinessAuditEntry",
		"...on OrgOauthAppAccessApprovedAuditEntry": "OrgOauthAppAccessApprovedAuditEntry",
		"...on OrgOauthAppAccessBlockedAuditEntry": "OrgOauthAppAccessBlockedAuditEntry",
		"...on OrgOauthAppAccessDeniedAuditEntry": "OrgOauthAppAccessDeniedAuditEntry",
		"...on OrgOauthAppAccessRequestedAuditEntry": "OrgOauthAppAccessRequestedAuditEntry",
		"...on OrgOauthAppAccessUnblockedAuditEntry": "OrgOauthAppAccessUnblockedAuditEntry",
		"...on OrgRemoveBillingManagerAuditEntry": "OrgRemoveBillingManagerAuditEntry",
		"...on OrgRemoveMemberAuditEntry": "OrgRemoveMemberAuditEntry",
		"...on OrgRemoveOutsideCollaboratorAuditEntry": "OrgRemoveOutsideCollaboratorAuditEntry",
		"...on OrgRestoreMemberAuditEntry": "OrgRestoreMemberAuditEntry",
		"...on OrgRestoreMemberMembershipOrganizationAuditEntryData": "OrgRestoreMemberMembershipOrganizationAuditEntryData",
		"...on OrgUnblockUserAuditEntry": "OrgUnblockUserAuditEntry",
		"...on OrgUpdateDefaultRepositoryPermissionAuditEntry": "OrgUpdateDefaultRepositoryPermissionAuditEntry",
		"...on OrgUpdateMemberAuditEntry": "OrgUpdateMemberAuditEntry",
		"...on OrgUpdateMemberRepositoryCreationPermissionAuditEntry": "OrgUpdateMemberRepositoryCreationPermissionAuditEntry",
		"...on OrgUpdateMemberRepositoryInvitationPermissionAuditEntry": "OrgUpdateMemberRepositoryInvitationPermissionAuditEntry",
		"...on PrivateRepositoryForkingDisableAuditEntry": "PrivateRepositoryForkingDisableAuditEntry",
		"...on PrivateRepositoryForkingEnableAuditEntry": "PrivateRepositoryForkingEnableAuditEntry",
		"...on RepoAccessAuditEntry": "RepoAccessAuditEntry",
		"...on RepoAddMemberAuditEntry": "RepoAddMemberAuditEntry",
		"...on RepoAddTopicAuditEntry": "RepoAddTopicAuditEntry",
		"...on RepoArchivedAuditEntry": "RepoArchivedAuditEntry",
		"...on RepoChangeMergeSettingAuditEntry": "RepoChangeMergeSettingAuditEntry",
		"...on RepoConfigDisableAnonymousGitAccessAuditEntry": "RepoConfigDisableAnonymousGitAccessAuditEntry",
		"...on RepoConfigDisableCollaboratorsOnlyAuditEntry": "RepoConfigDisableCollaboratorsOnlyAuditEntry",
		"...on RepoConfigDisableContributorsOnlyAuditEntry": "RepoConfigDisableContributorsOnlyAuditEntry",
		"...on RepoConfigDisableSockpuppetDisallowedAuditEntry": "RepoConfigDisableSockpuppetDisallowedAuditEntry",
		"...on RepoConfigEnableAnonymousGitAccessAuditEntry": "RepoConfigEnableAnonymousGitAccessAuditEntry",
		"...on RepoConfigEnableCollaboratorsOnlyAuditEntry": "RepoConfigEnableCollaboratorsOnlyAuditEntry",
		"...on RepoConfigEnableContributorsOnlyAuditEntry": "RepoConfigEnableContributorsOnlyAuditEntry",
		"...on RepoConfigEnableSockpuppetDisallowedAuditEntry": "RepoConfigEnableSockpuppetDisallowedAuditEntry",
		"...on RepoConfigLockAnonymousGitAccessAuditEntry": "RepoConfigLockAnonymousGitAccessAuditEntry",
		"...on RepoConfigUnlockAnonymousGitAccessAuditEntry": "RepoConfigUnlockAnonymousGitAccessAuditEntry",
		"...on RepoCreateAuditEntry": "RepoCreateAuditEntry",
		"...on RepoDestroyAuditEntry": "RepoDestroyAuditEntry",
		"...on RepoRemoveMemberAuditEntry": "RepoRemoveMemberAuditEntry",
		"...on RepoRemoveTopicAuditEntry": "RepoRemoveTopicAuditEntry",
		"...on RepositoryVisibilityChangeDisableAuditEntry": "RepositoryVisibilityChangeDisableAuditEntry",
		"...on RepositoryVisibilityChangeEnableAuditEntry": "RepositoryVisibilityChangeEnableAuditEntry",
		"...on TeamAddMemberAuditEntry": "TeamAddMemberAuditEntry",
		"...on TeamAddRepositoryAuditEntry": "TeamAddRepositoryAuditEntry",
		"...on TeamChangeParentTeamAuditEntry": "TeamChangeParentTeamAuditEntry",
		"...on TeamRemoveMemberAuditEntry": "TeamRemoveMemberAuditEntry",
		"...on TeamRemoveRepositoryAuditEntry": "TeamRemoveRepositoryAuditEntry",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI"
	},
	OrganizationAuditEntryEdge:{
		cursor:"String",
		node:"OrganizationAuditEntry"
	},
	OrganizationConnection:{
		edges:"OrganizationEdge",
		nodes:"Organization",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	OrganizationEdge:{
		cursor:"String",
		node:"Organization"
	},
	OrganizationEnterpriseOwnerConnection:{
		edges:"OrganizationEnterpriseOwnerEdge",
		nodes:"User",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	OrganizationEnterpriseOwnerEdge:{
		cursor:"String",
		node:"User",
		organizationRole:"RoleInOrganization"
	},
	OrganizationIdentityProvider:{
		digestMethod:"URI",
		externalIdentities:"ExternalIdentityConnection",
		id:"ID",
		idpCertificate:"X509Certificate",
		issuer:"String",
		organization:"Organization",
		signatureMethod:"URI",
		ssoUrl:"URI"
	},
	OrganizationInvitation:{
		createdAt:"DateTime",
		email:"String",
		id:"ID",
		invitationSource:"OrganizationInvitationSource",
		invitationType:"OrganizationInvitationType",
		invitee:"User",
		inviter:"User",
		inviterActor:"User",
		organization:"Organization",
		role:"OrganizationInvitationRole"
	},
	OrganizationInvitationConnection:{
		edges:"OrganizationInvitationEdge",
		nodes:"OrganizationInvitation",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	OrganizationInvitationEdge:{
		cursor:"String",
		node:"OrganizationInvitation"
	},
	OrganizationMemberConnection:{
		edges:"OrganizationMemberEdge",
		nodes:"User",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	OrganizationMemberEdge:{
		cursor:"String",
		hasTwoFactorEnabled:"Boolean",
		node:"User",
		role:"OrganizationMemberRole"
	},
	OrganizationMigration:{
		createdAt:"DateTime",
		databaseId:"String",
		failureReason:"String",
		id:"ID",
		remainingRepositoriesCount:"Int",
		sourceOrgName:"String",
		sourceOrgUrl:"URI",
		state:"OrganizationMigrationState",
		targetOrgName:"String",
		totalRepositoriesCount:"Int"
	},
	OrganizationOrUser:{
		"...on Organization":"Organization",
		"...on User":"User"
	},
	OrganizationTeamsHovercardContext:{
		message:"String",
		octicon:"String",
		relevantTeams:"TeamConnection",
		teamsResourcePath:"URI",
		teamsUrl:"URI",
		totalTeamCount:"Int"
	},
	OrganizationsHovercardContext:{
		message:"String",
		octicon:"String",
		relevantOrganizations:"OrganizationConnection",
		totalOrganizationCount:"Int"
	},
	Package:{
		id:"ID",
		latestVersion:"PackageVersion",
		name:"String",
		packageType:"PackageType",
		repository:"Repository",
		statistics:"PackageStatistics",
		version:"PackageVersion",
		versions:"PackageVersionConnection"
	},
	PackageConnection:{
		edges:"PackageEdge",
		nodes:"Package",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	PackageEdge:{
		cursor:"String",
		node:"Package"
	},
	PackageFile:{
		id:"ID",
		md5:"String",
		name:"String",
		packageVersion:"PackageVersion",
		sha1:"String",
		sha256:"String",
		size:"Int",
		updatedAt:"DateTime",
		url:"URI"
	},
	PackageFileConnection:{
		edges:"PackageFileEdge",
		nodes:"PackageFile",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	PackageFileEdge:{
		cursor:"String",
		node:"PackageFile"
	},
	PackageOwner:{
		"...on Organization": "Organization",
		"...on Repository": "Repository",
		"...on User": "User",
		id:"ID",
		packages:"PackageConnection"
	},
	PackageStatistics:{
		downloadsTotalCount:"Int"
	},
	PackageTag:{
		id:"ID",
		name:"String",
		version:"PackageVersion"
	},
	PackageVersion:{
		files:"PackageFileConnection",
		id:"ID",
		package:"Package",
		platform:"String",
		preRelease:"Boolean",
		readme:"String",
		release:"Release",
		statistics:"PackageVersionStatistics",
		summary:"String",
		version:"String"
	},
	PackageVersionConnection:{
		edges:"PackageVersionEdge",
		nodes:"PackageVersion",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	PackageVersionEdge:{
		cursor:"String",
		node:"PackageVersion"
	},
	PackageVersionStatistics:{
		downloadsTotalCount:"Int"
	},
	PageInfo:{
		endCursor:"String",
		hasNextPage:"Boolean",
		hasPreviousPage:"Boolean",
		startCursor:"String"
	},
	PermissionGranter:{
		"...on Organization":"Organization",
		"...on Repository":"Repository",
		"...on Team":"Team"
	},
	PermissionSource:{
		organization:"Organization",
		permission:"DefaultRepositoryPermissionField",
		roleName:"String",
		source:"PermissionGranter"
	},
	PinEnvironmentPayload:{
		clientMutationId:"String",
		environment:"Environment",
		pinnedEnvironment:"PinnedEnvironment"
	},
	PinIssuePayload:{
		clientMutationId:"String",
		issue:"Issue"
	},
	PinnableItem:{
		"...on Gist":"Gist",
		"...on Repository":"Repository"
	},
	PinnableItemConnection:{
		edges:"PinnableItemEdge",
		nodes:"PinnableItem",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	PinnableItemEdge:{
		cursor:"String",
		node:"PinnableItem"
	},
	PinnedDiscussion:{
		createdAt:"DateTime",
		databaseId:"Int",
		discussion:"Discussion",
		gradientStopColors:"String",
		id:"ID",
		pattern:"PinnedDiscussionPattern",
		pinnedBy:"Actor",
		preconfiguredGradient:"PinnedDiscussionGradient",
		repository:"Repository",
		updatedAt:"DateTime"
	},
	PinnedDiscussionConnection:{
		edges:"PinnedDiscussionEdge",
		nodes:"PinnedDiscussion",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	PinnedDiscussionEdge:{
		cursor:"String",
		node:"PinnedDiscussion"
	},
	PinnedEnvironment:{
		createdAt:"DateTime",
		databaseId:"Int",
		environment:"Environment",
		id:"ID",
		position:"Int",
		repository:"Repository"
	},
	PinnedEnvironmentConnection:{
		edges:"PinnedEnvironmentEdge",
		nodes:"PinnedEnvironment",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	PinnedEnvironmentEdge:{
		cursor:"String",
		node:"PinnedEnvironment"
	},
	PinnedEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		id:"ID",
		issue:"Issue"
	},
	PinnedIssue:{
		databaseId:"Int",
		fullDatabaseId:"BigInt",
		id:"ID",
		issue:"Issue",
		pinnedBy:"Actor",
		repository:"Repository"
	},
	PinnedIssueConnection:{
		edges:"PinnedIssueEdge",
		nodes:"PinnedIssue",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	PinnedIssueEdge:{
		cursor:"String",
		node:"PinnedIssue"
	},
	PreciseDateTime: `scalar.PreciseDateTime` as const,
	PrivateRepositoryForkingDisableAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		enterpriseResourcePath:"URI",
		enterpriseSlug:"String",
		enterpriseUrl:"URI",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		repository:"Repository",
		repositoryName:"String",
		repositoryResourcePath:"URI",
		repositoryUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	PrivateRepositoryForkingEnableAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		enterpriseResourcePath:"URI",
		enterpriseSlug:"String",
		enterpriseUrl:"URI",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		repository:"Repository",
		repositoryName:"String",
		repositoryResourcePath:"URI",
		repositoryUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	ProfileItemShowcase:{
		hasPinnedItems:"Boolean",
		items:"PinnableItemConnection"
	},
	ProfileOwner:{
		"...on Organization": "Organization",
		"...on User": "User",
		anyPinnableItems:"Boolean",
		email:"String",
		id:"ID",
		itemShowcase:"ProfileItemShowcase",
		location:"String",
		login:"String",
		name:"String",
		pinnableItems:"PinnableItemConnection",
		pinnedItems:"PinnableItemConnection",
		pinnedItemsRemaining:"Int",
		viewerCanChangePinnedItems:"Boolean",
		websiteUrl:"URI"
	},
	Project:{
		body:"String",
		bodyHTML:"HTML",
		closed:"Boolean",
		closedAt:"DateTime",
		columns:"ProjectColumnConnection",
		createdAt:"DateTime",
		creator:"Actor",
		databaseId:"Int",
		id:"ID",
		name:"String",
		number:"Int",
		owner:"ProjectOwner",
		pendingCards:"ProjectCardConnection",
		progress:"ProjectProgress",
		resourcePath:"URI",
		state:"ProjectState",
		updatedAt:"DateTime",
		url:"URI",
		viewerCanClose:"Boolean",
		viewerCanReopen:"Boolean",
		viewerCanUpdate:"Boolean"
	},
	ProjectCard:{
		column:"ProjectColumn",
		content:"ProjectCardItem",
		createdAt:"DateTime",
		creator:"Actor",
		databaseId:"Int",
		id:"ID",
		isArchived:"Boolean",
		note:"String",
		project:"Project",
		resourcePath:"URI",
		state:"ProjectCardState",
		updatedAt:"DateTime",
		url:"URI"
	},
	ProjectCardConnection:{
		edges:"ProjectCardEdge",
		nodes:"ProjectCard",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	ProjectCardEdge:{
		cursor:"String",
		node:"ProjectCard"
	},
	ProjectCardItem:{
		"...on Issue":"Issue",
		"...on PullRequest":"PullRequest"
	},
	ProjectColumn:{
		cards:"ProjectCardConnection",
		createdAt:"DateTime",
		databaseId:"Int",
		id:"ID",
		name:"String",
		project:"Project",
		purpose:"ProjectColumnPurpose",
		resourcePath:"URI",
		updatedAt:"DateTime",
		url:"URI"
	},
	ProjectColumnConnection:{
		edges:"ProjectColumnEdge",
		nodes:"ProjectColumn",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	ProjectColumnEdge:{
		cursor:"String",
		node:"ProjectColumn"
	},
	ProjectConnection:{
		edges:"ProjectEdge",
		nodes:"Project",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	ProjectEdge:{
		cursor:"String",
		node:"Project"
	},
	ProjectOwner:{
		"...on Organization": "Organization",
		"...on Repository": "Repository",
		"...on User": "User",
		id:"ID",
		project:"Project",
		projects:"ProjectConnection",
		projectsResourcePath:"URI",
		projectsUrl:"URI",
		viewerCanCreateProjects:"Boolean"
	},
	ProjectProgress:{
		doneCount:"Int",
		donePercentage:"Float",
		enabled:"Boolean",
		inProgressCount:"Int",
		inProgressPercentage:"Float",
		todoCount:"Int",
		todoPercentage:"Float"
	},
	ProjectV2:{
		closed:"Boolean",
		closedAt:"DateTime",
		createdAt:"DateTime",
		creator:"Actor",
		databaseId:"Int",
		field:"ProjectV2FieldConfiguration",
		fields:"ProjectV2FieldConfigurationConnection",
		fullDatabaseId:"BigInt",
		id:"ID",
		items:"ProjectV2ItemConnection",
		number:"Int",
		owner:"ProjectV2Owner",
		public:"Boolean",
		readme:"String",
		repositories:"RepositoryConnection",
		resourcePath:"URI",
		shortDescription:"String",
		statusUpdates:"ProjectV2StatusUpdateConnection",
		teams:"TeamConnection",
		template:"Boolean",
		title:"String",
		updatedAt:"DateTime",
		url:"URI",
		view:"ProjectV2View",
		viewerCanClose:"Boolean",
		viewerCanReopen:"Boolean",
		viewerCanUpdate:"Boolean",
		views:"ProjectV2ViewConnection",
		workflow:"ProjectV2Workflow",
		workflows:"ProjectV2WorkflowConnection"
	},
	ProjectV2Actor:{
		"...on Team":"Team",
		"...on User":"User"
	},
	ProjectV2ActorConnection:{
		edges:"ProjectV2ActorEdge",
		nodes:"ProjectV2Actor",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	ProjectV2ActorEdge:{
		cursor:"String",
		node:"ProjectV2Actor"
	},
	ProjectV2Connection:{
		edges:"ProjectV2Edge",
		nodes:"ProjectV2",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	ProjectV2Edge:{
		cursor:"String",
		node:"ProjectV2"
	},
	ProjectV2Field:{
		createdAt:"DateTime",
		dataType:"ProjectV2FieldType",
		databaseId:"Int",
		id:"ID",
		name:"String",
		project:"ProjectV2",
		updatedAt:"DateTime"
	},
	ProjectV2FieldCommon:{
		"...on ProjectV2Field": "ProjectV2Field",
		"...on ProjectV2IterationField": "ProjectV2IterationField",
		"...on ProjectV2SingleSelectField": "ProjectV2SingleSelectField",
		createdAt:"DateTime",
		dataType:"ProjectV2FieldType",
		databaseId:"Int",
		id:"ID",
		name:"String",
		project:"ProjectV2",
		updatedAt:"DateTime"
	},
	ProjectV2FieldConfiguration:{
		"...on ProjectV2Field":"ProjectV2Field",
		"...on ProjectV2IterationField":"ProjectV2IterationField",
		"...on ProjectV2SingleSelectField":"ProjectV2SingleSelectField"
	},
	ProjectV2FieldConfigurationConnection:{
		edges:"ProjectV2FieldConfigurationEdge",
		nodes:"ProjectV2FieldConfiguration",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	ProjectV2FieldConfigurationEdge:{
		cursor:"String",
		node:"ProjectV2FieldConfiguration"
	},
	ProjectV2FieldConnection:{
		edges:"ProjectV2FieldEdge",
		nodes:"ProjectV2Field",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	ProjectV2FieldEdge:{
		cursor:"String",
		node:"ProjectV2Field"
	},
	ProjectV2Item:{
		content:"ProjectV2ItemContent",
		createdAt:"DateTime",
		creator:"Actor",
		databaseId:"Int",
		fieldValueByName:"ProjectV2ItemFieldValue",
		fieldValues:"ProjectV2ItemFieldValueConnection",
		fullDatabaseId:"BigInt",
		id:"ID",
		isArchived:"Boolean",
		project:"ProjectV2",
		type:"ProjectV2ItemType",
		updatedAt:"DateTime"
	},
	ProjectV2ItemConnection:{
		edges:"ProjectV2ItemEdge",
		nodes:"ProjectV2Item",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	ProjectV2ItemContent:{
		"...on DraftIssue":"DraftIssue",
		"...on Issue":"Issue",
		"...on PullRequest":"PullRequest"
	},
	ProjectV2ItemEdge:{
		cursor:"String",
		node:"ProjectV2Item"
	},
	ProjectV2ItemFieldDateValue:{
		createdAt:"DateTime",
		creator:"Actor",
		databaseId:"Int",
		date:"Date",
		field:"ProjectV2FieldConfiguration",
		id:"ID",
		item:"ProjectV2Item",
		updatedAt:"DateTime"
	},
	ProjectV2ItemFieldIterationValue:{
		createdAt:"DateTime",
		creator:"Actor",
		databaseId:"Int",
		duration:"Int",
		field:"ProjectV2FieldConfiguration",
		id:"ID",
		item:"ProjectV2Item",
		iterationId:"String",
		startDate:"Date",
		title:"String",
		titleHTML:"String",
		updatedAt:"DateTime"
	},
	ProjectV2ItemFieldLabelValue:{
		field:"ProjectV2FieldConfiguration",
		labels:"LabelConnection"
	},
	ProjectV2ItemFieldMilestoneValue:{
		field:"ProjectV2FieldConfiguration",
		milestone:"Milestone"
	},
	ProjectV2ItemFieldNumberValue:{
		createdAt:"DateTime",
		creator:"Actor",
		databaseId:"Int",
		field:"ProjectV2FieldConfiguration",
		id:"ID",
		item:"ProjectV2Item",
		number:"Float",
		updatedAt:"DateTime"
	},
	ProjectV2ItemFieldPullRequestValue:{
		field:"ProjectV2FieldConfiguration",
		pullRequests:"PullRequestConnection"
	},
	ProjectV2ItemFieldRepositoryValue:{
		field:"ProjectV2FieldConfiguration",
		repository:"Repository"
	},
	ProjectV2ItemFieldReviewerValue:{
		field:"ProjectV2FieldConfiguration",
		reviewers:"RequestedReviewerConnection"
	},
	ProjectV2ItemFieldSingleSelectValue:{
		color:"ProjectV2SingleSelectFieldOptionColor",
		createdAt:"DateTime",
		creator:"Actor",
		databaseId:"Int",
		description:"String",
		descriptionHTML:"String",
		field:"ProjectV2FieldConfiguration",
		id:"ID",
		item:"ProjectV2Item",
		name:"String",
		nameHTML:"String",
		optionId:"String",
		updatedAt:"DateTime"
	},
	ProjectV2ItemFieldTextValue:{
		createdAt:"DateTime",
		creator:"Actor",
		databaseId:"Int",
		field:"ProjectV2FieldConfiguration",
		id:"ID",
		item:"ProjectV2Item",
		text:"String",
		updatedAt:"DateTime"
	},
	ProjectV2ItemFieldUserValue:{
		field:"ProjectV2FieldConfiguration",
		users:"UserConnection"
	},
	ProjectV2ItemFieldValue:{
		"...on ProjectV2ItemFieldDateValue":"ProjectV2ItemFieldDateValue",
		"...on ProjectV2ItemFieldIterationValue":"ProjectV2ItemFieldIterationValue",
		"...on ProjectV2ItemFieldLabelValue":"ProjectV2ItemFieldLabelValue",
		"...on ProjectV2ItemFieldMilestoneValue":"ProjectV2ItemFieldMilestoneValue",
		"...on ProjectV2ItemFieldNumberValue":"ProjectV2ItemFieldNumberValue",
		"...on ProjectV2ItemFieldPullRequestValue":"ProjectV2ItemFieldPullRequestValue",
		"...on ProjectV2ItemFieldRepositoryValue":"ProjectV2ItemFieldRepositoryValue",
		"...on ProjectV2ItemFieldReviewerValue":"ProjectV2ItemFieldReviewerValue",
		"...on ProjectV2ItemFieldSingleSelectValue":"ProjectV2ItemFieldSingleSelectValue",
		"...on ProjectV2ItemFieldTextValue":"ProjectV2ItemFieldTextValue",
		"...on ProjectV2ItemFieldUserValue":"ProjectV2ItemFieldUserValue"
	},
	ProjectV2ItemFieldValueCommon:{
		"...on ProjectV2ItemFieldDateValue": "ProjectV2ItemFieldDateValue",
		"...on ProjectV2ItemFieldIterationValue": "ProjectV2ItemFieldIterationValue",
		"...on ProjectV2ItemFieldNumberValue": "ProjectV2ItemFieldNumberValue",
		"...on ProjectV2ItemFieldSingleSelectValue": "ProjectV2ItemFieldSingleSelectValue",
		"...on ProjectV2ItemFieldTextValue": "ProjectV2ItemFieldTextValue",
		createdAt:"DateTime",
		creator:"Actor",
		databaseId:"Int",
		field:"ProjectV2FieldConfiguration",
		id:"ID",
		item:"ProjectV2Item",
		updatedAt:"DateTime"
	},
	ProjectV2ItemFieldValueConnection:{
		edges:"ProjectV2ItemFieldValueEdge",
		nodes:"ProjectV2ItemFieldValue",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	ProjectV2ItemFieldValueEdge:{
		cursor:"String",
		node:"ProjectV2ItemFieldValue"
	},
	ProjectV2IterationField:{
		configuration:"ProjectV2IterationFieldConfiguration",
		createdAt:"DateTime",
		dataType:"ProjectV2FieldType",
		databaseId:"Int",
		id:"ID",
		name:"String",
		project:"ProjectV2",
		updatedAt:"DateTime"
	},
	ProjectV2IterationFieldConfiguration:{
		completedIterations:"ProjectV2IterationFieldIteration",
		duration:"Int",
		iterations:"ProjectV2IterationFieldIteration",
		startDay:"Int"
	},
	ProjectV2IterationFieldIteration:{
		duration:"Int",
		id:"String",
		startDate:"Date",
		title:"String",
		titleHTML:"String"
	},
	ProjectV2Owner:{
		"...on Issue": "Issue",
		"...on Organization": "Organization",
		"...on PullRequest": "PullRequest",
		"...on User": "User",
		id:"ID",
		projectV2:"ProjectV2",
		projectsV2:"ProjectV2Connection"
	},
	ProjectV2Recent:{
		"...on Organization": "Organization",
		"...on Repository": "Repository",
		"...on User": "User",
		recentProjects:"ProjectV2Connection"
	},
	ProjectV2SingleSelectField:{
		createdAt:"DateTime",
		dataType:"ProjectV2FieldType",
		databaseId:"Int",
		id:"ID",
		name:"String",
		options:"ProjectV2SingleSelectFieldOption",
		project:"ProjectV2",
		updatedAt:"DateTime"
	},
	ProjectV2SingleSelectFieldOption:{
		color:"ProjectV2SingleSelectFieldOptionColor",
		description:"String",
		descriptionHTML:"String",
		id:"String",
		name:"String",
		nameHTML:"String"
	},
	ProjectV2SortBy:{
		direction:"OrderDirection",
		field:"ProjectV2Field"
	},
	ProjectV2SortByConnection:{
		edges:"ProjectV2SortByEdge",
		nodes:"ProjectV2SortBy",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	ProjectV2SortByEdge:{
		cursor:"String",
		node:"ProjectV2SortBy"
	},
	ProjectV2SortByField:{
		direction:"OrderDirection",
		field:"ProjectV2FieldConfiguration"
	},
	ProjectV2SortByFieldConnection:{
		edges:"ProjectV2SortByFieldEdge",
		nodes:"ProjectV2SortByField",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	ProjectV2SortByFieldEdge:{
		cursor:"String",
		node:"ProjectV2SortByField"
	},
	ProjectV2StatusUpdate:{
		body:"String",
		bodyHTML:"HTML",
		createdAt:"DateTime",
		creator:"Actor",
		databaseId:"Int",
		fullDatabaseId:"BigInt",
		id:"ID",
		project:"ProjectV2",
		startDate:"Date",
		status:"ProjectV2StatusUpdateStatus",
		targetDate:"Date",
		updatedAt:"DateTime"
	},
	ProjectV2StatusUpdateConnection:{
		edges:"ProjectV2StatusUpdateEdge",
		nodes:"ProjectV2StatusUpdate",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	ProjectV2StatusUpdateEdge:{
		cursor:"String",
		node:"ProjectV2StatusUpdate"
	},
	ProjectV2View:{
		createdAt:"DateTime",
		databaseId:"Int",
		fields:"ProjectV2FieldConfigurationConnection",
		filter:"String",
		fullDatabaseId:"BigInt",
		groupBy:"ProjectV2FieldConnection",
		groupByFields:"ProjectV2FieldConfigurationConnection",
		id:"ID",
		layout:"ProjectV2ViewLayout",
		name:"String",
		number:"Int",
		project:"ProjectV2",
		sortBy:"ProjectV2SortByConnection",
		sortByFields:"ProjectV2SortByFieldConnection",
		updatedAt:"DateTime",
		verticalGroupBy:"ProjectV2FieldConnection",
		verticalGroupByFields:"ProjectV2FieldConfigurationConnection",
		visibleFields:"ProjectV2FieldConnection"
	},
	ProjectV2ViewConnection:{
		edges:"ProjectV2ViewEdge",
		nodes:"ProjectV2View",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	ProjectV2ViewEdge:{
		cursor:"String",
		node:"ProjectV2View"
	},
	ProjectV2Workflow:{
		createdAt:"DateTime",
		databaseId:"Int",
		enabled:"Boolean",
		fullDatabaseId:"BigInt",
		id:"ID",
		name:"String",
		number:"Int",
		project:"ProjectV2",
		updatedAt:"DateTime"
	},
	ProjectV2WorkflowConnection:{
		edges:"ProjectV2WorkflowEdge",
		nodes:"ProjectV2Workflow",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	ProjectV2WorkflowEdge:{
		cursor:"String",
		node:"ProjectV2Workflow"
	},
	PropertyTargetDefinition:{
		name:"String",
		propertyValues:"String",
		source:"String"
	},
	PublicKey:{
		accessedAt:"DateTime",
		createdAt:"DateTime",
		fingerprint:"String",
		id:"ID",
		isReadOnly:"Boolean",
		key:"String",
		updatedAt:"DateTime"
	},
	PublicKeyConnection:{
		edges:"PublicKeyEdge",
		nodes:"PublicKey",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	PublicKeyEdge:{
		cursor:"String",
		node:"PublicKey"
	},
	PublishSponsorsTierPayload:{
		clientMutationId:"String",
		sponsorsTier:"SponsorsTier"
	},
	PullRequest:{
		activeLockReason:"LockReason",
		additions:"Int",
		assignees:"UserConnection",
		author:"Actor",
		authorAssociation:"CommentAuthorAssociation",
		autoMergeRequest:"AutoMergeRequest",
		baseRef:"Ref",
		baseRefName:"String",
		baseRefOid:"GitObjectID",
		baseRepository:"Repository",
		body:"String",
		bodyHTML:"HTML",
		bodyText:"String",
		canBeRebased:"Boolean",
		changedFiles:"Int",
		checksResourcePath:"URI",
		checksUrl:"URI",
		closed:"Boolean",
		closedAt:"DateTime",
		closingIssuesReferences:"IssueConnection",
		comments:"IssueCommentConnection",
		commits:"PullRequestCommitConnection",
		createdAt:"DateTime",
		createdViaEmail:"Boolean",
		databaseId:"Int",
		deletions:"Int",
		editor:"Actor",
		files:"PullRequestChangedFileConnection",
		fullDatabaseId:"BigInt",
		headRef:"Ref",
		headRefName:"String",
		headRefOid:"GitObjectID",
		headRepository:"Repository",
		headRepositoryOwner:"RepositoryOwner",
		hovercard:"Hovercard",
		id:"ID",
		includesCreatedEdit:"Boolean",
		isCrossRepository:"Boolean",
		isDraft:"Boolean",
		isInMergeQueue:"Boolean",
		isMergeQueueEnabled:"Boolean",
		isReadByViewer:"Boolean",
		labels:"LabelConnection",
		lastEditedAt:"DateTime",
		latestOpinionatedReviews:"PullRequestReviewConnection",
		latestReviews:"PullRequestReviewConnection",
		locked:"Boolean",
		maintainerCanModify:"Boolean",
		mergeCommit:"Commit",
		mergeQueue:"MergeQueue",
		mergeQueueEntry:"MergeQueueEntry",
		mergeStateStatus:"MergeStateStatus",
		mergeable:"MergeableState",
		merged:"Boolean",
		mergedAt:"DateTime",
		mergedBy:"Actor",
		milestone:"Milestone",
		number:"Int",
		participants:"UserConnection",
		permalink:"URI",
		potentialMergeCommit:"Commit",
		projectCards:"ProjectCardConnection",
		projectItems:"ProjectV2ItemConnection",
		projectV2:"ProjectV2",
		projectsV2:"ProjectV2Connection",
		publishedAt:"DateTime",
		reactionGroups:"ReactionGroup",
		reactions:"ReactionConnection",
		repository:"Repository",
		resourcePath:"URI",
		revertResourcePath:"URI",
		revertUrl:"URI",
		reviewDecision:"PullRequestReviewDecision",
		reviewRequests:"ReviewRequestConnection",
		reviewThreads:"PullRequestReviewThreadConnection",
		reviews:"PullRequestReviewConnection",
		state:"PullRequestState",
		statusCheckRollup:"StatusCheckRollup",
		suggestedReviewers:"SuggestedReviewer",
		timeline:"PullRequestTimelineConnection",
		timelineItems:"PullRequestTimelineItemsConnection",
		title:"String",
		titleHTML:"HTML",
		totalCommentsCount:"Int",
		updatedAt:"DateTime",
		url:"URI",
		userContentEdits:"UserContentEditConnection",
		viewerCanApplySuggestion:"Boolean",
		viewerCanClose:"Boolean",
		viewerCanDeleteHeadRef:"Boolean",
		viewerCanDisableAutoMerge:"Boolean",
		viewerCanEditFiles:"Boolean",
		viewerCanEnableAutoMerge:"Boolean",
		viewerCanLabel:"Boolean",
		viewerCanMergeAsAdmin:"Boolean",
		viewerCanReact:"Boolean",
		viewerCanReopen:"Boolean",
		viewerCanSubscribe:"Boolean",
		viewerCanUpdate:"Boolean",
		viewerCanUpdateBranch:"Boolean",
		viewerCannotUpdateReasons:"CommentCannotUpdateReason",
		viewerDidAuthor:"Boolean",
		viewerLatestReview:"PullRequestReview",
		viewerLatestReviewRequest:"ReviewRequest",
		viewerMergeBodyText:"String",
		viewerMergeHeadlineText:"String",
		viewerSubscription:"SubscriptionState"
	},
	PullRequestChangedFile:{
		additions:"Int",
		changeType:"PatchStatus",
		deletions:"Int",
		path:"String",
		viewerViewedState:"FileViewedState"
	},
	PullRequestChangedFileConnection:{
		edges:"PullRequestChangedFileEdge",
		nodes:"PullRequestChangedFile",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	PullRequestChangedFileEdge:{
		cursor:"String",
		node:"PullRequestChangedFile"
	},
	PullRequestCommit:{
		commit:"Commit",
		id:"ID",
		pullRequest:"PullRequest",
		resourcePath:"URI",
		url:"URI"
	},
	PullRequestCommitCommentThread:{
		comments:"CommitCommentConnection",
		commit:"Commit",
		id:"ID",
		path:"String",
		position:"Int",
		pullRequest:"PullRequest",
		repository:"Repository"
	},
	PullRequestCommitConnection:{
		edges:"PullRequestCommitEdge",
		nodes:"PullRequestCommit",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	PullRequestCommitEdge:{
		cursor:"String",
		node:"PullRequestCommit"
	},
	PullRequestConnection:{
		edges:"PullRequestEdge",
		nodes:"PullRequest",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	PullRequestContributionsByRepository:{
		contributions:"CreatedPullRequestContributionConnection",
		repository:"Repository"
	},
	PullRequestEdge:{
		cursor:"String",
		node:"PullRequest"
	},
	PullRequestParameters:{
		dismissStaleReviewsOnPush:"Boolean",
		requireCodeOwnerReview:"Boolean",
		requireLastPushApproval:"Boolean",
		requiredApprovingReviewCount:"Int",
		requiredReviewThreadResolution:"Boolean"
	},
	PullRequestReview:{
		author:"Actor",
		authorAssociation:"CommentAuthorAssociation",
		authorCanPushToRepository:"Boolean",
		body:"String",
		bodyHTML:"HTML",
		bodyText:"String",
		comments:"PullRequestReviewCommentConnection",
		commit:"Commit",
		createdAt:"DateTime",
		createdViaEmail:"Boolean",
		databaseId:"Int",
		editor:"Actor",
		fullDatabaseId:"BigInt",
		id:"ID",
		includesCreatedEdit:"Boolean",
		isMinimized:"Boolean",
		lastEditedAt:"DateTime",
		minimizedReason:"String",
		onBehalfOf:"TeamConnection",
		publishedAt:"DateTime",
		pullRequest:"PullRequest",
		reactionGroups:"ReactionGroup",
		reactions:"ReactionConnection",
		repository:"Repository",
		resourcePath:"URI",
		state:"PullRequestReviewState",
		submittedAt:"DateTime",
		updatedAt:"DateTime",
		url:"URI",
		userContentEdits:"UserContentEditConnection",
		viewerCanDelete:"Boolean",
		viewerCanMinimize:"Boolean",
		viewerCanReact:"Boolean",
		viewerCanUpdate:"Boolean",
		viewerCannotUpdateReasons:"CommentCannotUpdateReason",
		viewerDidAuthor:"Boolean"
	},
	PullRequestReviewComment:{
		author:"Actor",
		authorAssociation:"CommentAuthorAssociation",
		body:"String",
		bodyHTML:"HTML",
		bodyText:"String",
		commit:"Commit",
		createdAt:"DateTime",
		createdViaEmail:"Boolean",
		databaseId:"Int",
		diffHunk:"String",
		draftedAt:"DateTime",
		editor:"Actor",
		fullDatabaseId:"BigInt",
		id:"ID",
		includesCreatedEdit:"Boolean",
		isMinimized:"Boolean",
		lastEditedAt:"DateTime",
		line:"Int",
		minimizedReason:"String",
		originalCommit:"Commit",
		originalLine:"Int",
		originalPosition:"Int",
		originalStartLine:"Int",
		outdated:"Boolean",
		path:"String",
		position:"Int",
		publishedAt:"DateTime",
		pullRequest:"PullRequest",
		pullRequestReview:"PullRequestReview",
		reactionGroups:"ReactionGroup",
		reactions:"ReactionConnection",
		replyTo:"PullRequestReviewComment",
		repository:"Repository",
		resourcePath:"URI",
		startLine:"Int",
		state:"PullRequestReviewCommentState",
		subjectType:"PullRequestReviewThreadSubjectType",
		updatedAt:"DateTime",
		url:"URI",
		userContentEdits:"UserContentEditConnection",
		viewerCanDelete:"Boolean",
		viewerCanMinimize:"Boolean",
		viewerCanReact:"Boolean",
		viewerCanUpdate:"Boolean",
		viewerCannotUpdateReasons:"CommentCannotUpdateReason",
		viewerDidAuthor:"Boolean"
	},
	PullRequestReviewCommentConnection:{
		edges:"PullRequestReviewCommentEdge",
		nodes:"PullRequestReviewComment",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	PullRequestReviewCommentEdge:{
		cursor:"String",
		node:"PullRequestReviewComment"
	},
	PullRequestReviewConnection:{
		edges:"PullRequestReviewEdge",
		nodes:"PullRequestReview",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	PullRequestReviewContributionsByRepository:{
		contributions:"CreatedPullRequestReviewContributionConnection",
		repository:"Repository"
	},
	PullRequestReviewEdge:{
		cursor:"String",
		node:"PullRequestReview"
	},
	PullRequestReviewThread:{
		comments:"PullRequestReviewCommentConnection",
		diffSide:"DiffSide",
		id:"ID",
		isCollapsed:"Boolean",
		isOutdated:"Boolean",
		isResolved:"Boolean",
		line:"Int",
		originalLine:"Int",
		originalStartLine:"Int",
		path:"String",
		pullRequest:"PullRequest",
		repository:"Repository",
		resolvedBy:"User",
		startDiffSide:"DiffSide",
		startLine:"Int",
		subjectType:"PullRequestReviewThreadSubjectType",
		viewerCanReply:"Boolean",
		viewerCanResolve:"Boolean",
		viewerCanUnresolve:"Boolean"
	},
	PullRequestReviewThreadConnection:{
		edges:"PullRequestReviewThreadEdge",
		nodes:"PullRequestReviewThread",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	PullRequestReviewThreadEdge:{
		cursor:"String",
		node:"PullRequestReviewThread"
	},
	PullRequestRevisionMarker:{
		createdAt:"DateTime",
		lastSeenCommit:"Commit",
		pullRequest:"PullRequest"
	},
	PullRequestTemplate:{
		body:"String",
		filename:"String",
		repository:"Repository"
	},
	PullRequestThread:{
		comments:"PullRequestReviewCommentConnection",
		diffSide:"DiffSide",
		id:"ID",
		isCollapsed:"Boolean",
		isOutdated:"Boolean",
		isResolved:"Boolean",
		line:"Int",
		path:"String",
		pullRequest:"PullRequest",
		repository:"Repository",
		resolvedBy:"User",
		startDiffSide:"DiffSide",
		startLine:"Int",
		subjectType:"PullRequestReviewThreadSubjectType",
		viewerCanReply:"Boolean",
		viewerCanResolve:"Boolean",
		viewerCanUnresolve:"Boolean"
	},
	PullRequestTimelineConnection:{
		edges:"PullRequestTimelineItemEdge",
		nodes:"PullRequestTimelineItem",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	PullRequestTimelineItem:{
		"...on AssignedEvent":"AssignedEvent",
		"...on BaseRefDeletedEvent":"BaseRefDeletedEvent",
		"...on BaseRefForcePushedEvent":"BaseRefForcePushedEvent",
		"...on ClosedEvent":"ClosedEvent",
		"...on Commit":"Commit",
		"...on CommitCommentThread":"CommitCommentThread",
		"...on CrossReferencedEvent":"CrossReferencedEvent",
		"...on DemilestonedEvent":"DemilestonedEvent",
		"...on DeployedEvent":"DeployedEvent",
		"...on DeploymentEnvironmentChangedEvent":"DeploymentEnvironmentChangedEvent",
		"...on HeadRefDeletedEvent":"HeadRefDeletedEvent",
		"...on HeadRefForcePushedEvent":"HeadRefForcePushedEvent",
		"...on HeadRefRestoredEvent":"HeadRefRestoredEvent",
		"...on IssueComment":"IssueComment",
		"...on LabeledEvent":"LabeledEvent",
		"...on LockedEvent":"LockedEvent",
		"...on MergedEvent":"MergedEvent",
		"...on MilestonedEvent":"MilestonedEvent",
		"...on PullRequestReview":"PullRequestReview",
		"...on PullRequestReviewComment":"PullRequestReviewComment",
		"...on PullRequestReviewThread":"PullRequestReviewThread",
		"...on ReferencedEvent":"ReferencedEvent",
		"...on RenamedTitleEvent":"RenamedTitleEvent",
		"...on ReopenedEvent":"ReopenedEvent",
		"...on ReviewDismissedEvent":"ReviewDismissedEvent",
		"...on ReviewRequestRemovedEvent":"ReviewRequestRemovedEvent",
		"...on ReviewRequestedEvent":"ReviewRequestedEvent",
		"...on SubscribedEvent":"SubscribedEvent",
		"...on UnassignedEvent":"UnassignedEvent",
		"...on UnlabeledEvent":"UnlabeledEvent",
		"...on UnlockedEvent":"UnlockedEvent",
		"...on UnsubscribedEvent":"UnsubscribedEvent",
		"...on UserBlockedEvent":"UserBlockedEvent"
	},
	PullRequestTimelineItemEdge:{
		cursor:"String",
		node:"PullRequestTimelineItem"
	},
	PullRequestTimelineItems:{
		"...on AddedToMergeQueueEvent":"AddedToMergeQueueEvent",
		"...on AddedToProjectEvent":"AddedToProjectEvent",
		"...on AssignedEvent":"AssignedEvent",
		"...on AutoMergeDisabledEvent":"AutoMergeDisabledEvent",
		"...on AutoMergeEnabledEvent":"AutoMergeEnabledEvent",
		"...on AutoRebaseEnabledEvent":"AutoRebaseEnabledEvent",
		"...on AutoSquashEnabledEvent":"AutoSquashEnabledEvent",
		"...on AutomaticBaseChangeFailedEvent":"AutomaticBaseChangeFailedEvent",
		"...on AutomaticBaseChangeSucceededEvent":"AutomaticBaseChangeSucceededEvent",
		"...on BaseRefChangedEvent":"BaseRefChangedEvent",
		"...on BaseRefDeletedEvent":"BaseRefDeletedEvent",
		"...on BaseRefForcePushedEvent":"BaseRefForcePushedEvent",
		"...on ClosedEvent":"ClosedEvent",
		"...on CommentDeletedEvent":"CommentDeletedEvent",
		"...on ConnectedEvent":"ConnectedEvent",
		"...on ConvertToDraftEvent":"ConvertToDraftEvent",
		"...on ConvertedNoteToIssueEvent":"ConvertedNoteToIssueEvent",
		"...on ConvertedToDiscussionEvent":"ConvertedToDiscussionEvent",
		"...on CrossReferencedEvent":"CrossReferencedEvent",
		"...on DemilestonedEvent":"DemilestonedEvent",
		"...on DeployedEvent":"DeployedEvent",
		"...on DeploymentEnvironmentChangedEvent":"DeploymentEnvironmentChangedEvent",
		"...on DisconnectedEvent":"DisconnectedEvent",
		"...on HeadRefDeletedEvent":"HeadRefDeletedEvent",
		"...on HeadRefForcePushedEvent":"HeadRefForcePushedEvent",
		"...on HeadRefRestoredEvent":"HeadRefRestoredEvent",
		"...on IssueComment":"IssueComment",
		"...on LabeledEvent":"LabeledEvent",
		"...on LockedEvent":"LockedEvent",
		"...on MarkedAsDuplicateEvent":"MarkedAsDuplicateEvent",
		"...on MentionedEvent":"MentionedEvent",
		"...on MergedEvent":"MergedEvent",
		"...on MilestonedEvent":"MilestonedEvent",
		"...on MovedColumnsInProjectEvent":"MovedColumnsInProjectEvent",
		"...on PinnedEvent":"PinnedEvent",
		"...on PullRequestCommit":"PullRequestCommit",
		"...on PullRequestCommitCommentThread":"PullRequestCommitCommentThread",
		"...on PullRequestReview":"PullRequestReview",
		"...on PullRequestReviewThread":"PullRequestReviewThread",
		"...on PullRequestRevisionMarker":"PullRequestRevisionMarker",
		"...on ReadyForReviewEvent":"ReadyForReviewEvent",
		"...on ReferencedEvent":"ReferencedEvent",
		"...on RemovedFromMergeQueueEvent":"RemovedFromMergeQueueEvent",
		"...on RemovedFromProjectEvent":"RemovedFromProjectEvent",
		"...on RenamedTitleEvent":"RenamedTitleEvent",
		"...on ReopenedEvent":"ReopenedEvent",
		"...on ReviewDismissedEvent":"ReviewDismissedEvent",
		"...on ReviewRequestRemovedEvent":"ReviewRequestRemovedEvent",
		"...on ReviewRequestedEvent":"ReviewRequestedEvent",
		"...on SubscribedEvent":"SubscribedEvent",
		"...on TransferredEvent":"TransferredEvent",
		"...on UnassignedEvent":"UnassignedEvent",
		"...on UnlabeledEvent":"UnlabeledEvent",
		"...on UnlockedEvent":"UnlockedEvent",
		"...on UnmarkedAsDuplicateEvent":"UnmarkedAsDuplicateEvent",
		"...on UnpinnedEvent":"UnpinnedEvent",
		"...on UnsubscribedEvent":"UnsubscribedEvent",
		"...on UserBlockedEvent":"UserBlockedEvent"
	},
	PullRequestTimelineItemsConnection:{
		edges:"PullRequestTimelineItemsEdge",
		filteredCount:"Int",
		nodes:"PullRequestTimelineItems",
		pageCount:"Int",
		pageInfo:"PageInfo",
		totalCount:"Int",
		updatedAt:"DateTime"
	},
	PullRequestTimelineItemsEdge:{
		cursor:"String",
		node:"PullRequestTimelineItems"
	},
	Push:{
		id:"ID",
		nextSha:"GitObjectID",
		permalink:"URI",
		previousSha:"GitObjectID",
		pusher:"Actor",
		repository:"Repository"
	},
	PushAllowance:{
		actor:"PushAllowanceActor",
		branchProtectionRule:"BranchProtectionRule",
		id:"ID"
	},
	PushAllowanceActor:{
		"...on App":"App",
		"...on Team":"Team",
		"...on User":"User"
	},
	PushAllowanceConnection:{
		edges:"PushAllowanceEdge",
		nodes:"PushAllowance",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	PushAllowanceEdge:{
		cursor:"String",
		node:"PushAllowance"
	},
	Query:{
		codeOfConduct:"CodeOfConduct",
		codesOfConduct:"CodeOfConduct",
		enterprise:"Enterprise",
		enterpriseAdministratorInvitation:"EnterpriseAdministratorInvitation",
		enterpriseAdministratorInvitationByToken:"EnterpriseAdministratorInvitation",
		enterpriseMemberInvitation:"EnterpriseMemberInvitation",
		enterpriseMemberInvitationByToken:"EnterpriseMemberInvitation",
		id:"ID",
		license:"License",
		licenses:"License",
		marketplaceCategories:"MarketplaceCategory",
		marketplaceCategory:"MarketplaceCategory",
		marketplaceListing:"MarketplaceListing",
		marketplaceListings:"MarketplaceListingConnection",
		meta:"GitHubMetadata",
		node:"Node",
		nodes:"Node",
		organization:"Organization",
		rateLimit:"RateLimit",
		relay:"Query",
		repository:"Repository",
		repositoryOwner:"RepositoryOwner",
		resource:"UniformResourceLocatable",
		search:"SearchResultItemConnection",
		securityAdvisories:"SecurityAdvisoryConnection",
		securityAdvisory:"SecurityAdvisory",
		securityVulnerabilities:"SecurityVulnerabilityConnection",
		sponsorables:"SponsorableItemConnection",
		topic:"Topic",
		user:"User",
		viewer:"User"
	},
	RateLimit:{
		cost:"Int",
		limit:"Int",
		nodeCount:"Int",
		remaining:"Int",
		resetAt:"DateTime",
		used:"Int"
	},
	Reactable:{
		"...on CommitComment": "CommitComment",
		"...on Discussion": "Discussion",
		"...on DiscussionComment": "DiscussionComment",
		"...on Issue": "Issue",
		"...on IssueComment": "IssueComment",
		"...on PullRequest": "PullRequest",
		"...on PullRequestReview": "PullRequestReview",
		"...on PullRequestReviewComment": "PullRequestReviewComment",
		"...on Release": "Release",
		"...on TeamDiscussion": "TeamDiscussion",
		"...on TeamDiscussionComment": "TeamDiscussionComment",
		databaseId:"Int",
		id:"ID",
		reactionGroups:"ReactionGroup",
		reactions:"ReactionConnection",
		viewerCanReact:"Boolean"
	},
	ReactingUserConnection:{
		edges:"ReactingUserEdge",
		nodes:"User",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	ReactingUserEdge:{
		cursor:"String",
		node:"User",
		reactedAt:"DateTime"
	},
	Reaction:{
		content:"ReactionContent",
		createdAt:"DateTime",
		databaseId:"Int",
		id:"ID",
		reactable:"Reactable",
		user:"User"
	},
	ReactionConnection:{
		edges:"ReactionEdge",
		nodes:"Reaction",
		pageInfo:"PageInfo",
		totalCount:"Int",
		viewerHasReacted:"Boolean"
	},
	ReactionEdge:{
		cursor:"String",
		node:"Reaction"
	},
	ReactionGroup:{
		content:"ReactionContent",
		createdAt:"DateTime",
		reactors:"ReactorConnection",
		subject:"Reactable",
		users:"ReactingUserConnection",
		viewerHasReacted:"Boolean"
	},
	Reactor:{
		"...on Bot":"Bot",
		"...on Mannequin":"Mannequin",
		"...on Organization":"Organization",
		"...on User":"User"
	},
	ReactorConnection:{
		edges:"ReactorEdge",
		nodes:"Reactor",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	ReactorEdge:{
		cursor:"String",
		node:"Reactor",
		reactedAt:"DateTime"
	},
	ReadyForReviewEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		id:"ID",
		pullRequest:"PullRequest",
		resourcePath:"URI",
		url:"URI"
	},
	Ref:{
		associatedPullRequests:"PullRequestConnection",
		branchProtectionRule:"BranchProtectionRule",
		compare:"Comparison",
		id:"ID",
		name:"String",
		prefix:"String",
		refUpdateRule:"RefUpdateRule",
		repository:"Repository",
		rules:"RepositoryRuleConnection",
		target:"GitObject"
	},
	RefConnection:{
		edges:"RefEdge",
		nodes:"Ref",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	RefEdge:{
		cursor:"String",
		node:"Ref"
	},
	RefNameConditionTarget:{
		exclude:"String",
		include:"String"
	},
	RefUpdateRule:{
		allowsDeletions:"Boolean",
		allowsForcePushes:"Boolean",
		blocksCreations:"Boolean",
		pattern:"String",
		requiredApprovingReviewCount:"Int",
		requiredStatusCheckContexts:"String",
		requiresCodeOwnerReviews:"Boolean",
		requiresConversationResolution:"Boolean",
		requiresLinearHistory:"Boolean",
		requiresSignatures:"Boolean",
		viewerAllowedToDismissReviews:"Boolean",
		viewerCanPush:"Boolean"
	},
	ReferencedEvent:{
		actor:"Actor",
		commit:"Commit",
		commitRepository:"Repository",
		createdAt:"DateTime",
		id:"ID",
		isCrossRepository:"Boolean",
		isDirectReference:"Boolean",
		subject:"ReferencedSubject"
	},
	ReferencedSubject:{
		"...on Issue":"Issue",
		"...on PullRequest":"PullRequest"
	},
	RegenerateEnterpriseIdentityProviderRecoveryCodesPayload:{
		clientMutationId:"String",
		identityProvider:"EnterpriseIdentityProvider"
	},
	RegenerateVerifiableDomainTokenPayload:{
		clientMutationId:"String",
		verificationToken:"String"
	},
	RejectDeploymentsPayload:{
		clientMutationId:"String",
		deployments:"Deployment"
	},
	Release:{
		author:"User",
		createdAt:"DateTime",
		databaseId:"Int",
		description:"String",
		descriptionHTML:"HTML",
		id:"ID",
		isDraft:"Boolean",
		isLatest:"Boolean",
		isPrerelease:"Boolean",
		mentions:"UserConnection",
		name:"String",
		publishedAt:"DateTime",
		reactionGroups:"ReactionGroup",
		reactions:"ReactionConnection",
		releaseAssets:"ReleaseAssetConnection",
		repository:"Repository",
		resourcePath:"URI",
		shortDescriptionHTML:"HTML",
		tag:"Ref",
		tagCommit:"Commit",
		tagName:"String",
		updatedAt:"DateTime",
		url:"URI",
		viewerCanReact:"Boolean"
	},
	ReleaseAsset:{
		contentType:"String",
		createdAt:"DateTime",
		downloadCount:"Int",
		downloadUrl:"URI",
		id:"ID",
		name:"String",
		release:"Release",
		size:"Int",
		updatedAt:"DateTime",
		uploadedBy:"User",
		url:"URI"
	},
	ReleaseAssetConnection:{
		edges:"ReleaseAssetEdge",
		nodes:"ReleaseAsset",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	ReleaseAssetEdge:{
		cursor:"String",
		node:"ReleaseAsset"
	},
	ReleaseConnection:{
		edges:"ReleaseEdge",
		nodes:"Release",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	ReleaseEdge:{
		cursor:"String",
		node:"Release"
	},
	RemoveAssigneesFromAssignablePayload:{
		assignable:"Assignable",
		clientMutationId:"String"
	},
	RemoveEnterpriseAdminPayload:{
		admin:"User",
		clientMutationId:"String",
		enterprise:"Enterprise",
		message:"String",
		viewer:"User"
	},
	RemoveEnterpriseIdentityProviderPayload:{
		clientMutationId:"String",
		identityProvider:"EnterpriseIdentityProvider"
	},
	RemoveEnterpriseMemberPayload:{
		clientMutationId:"String",
		enterprise:"Enterprise",
		user:"User",
		viewer:"User"
	},
	RemoveEnterpriseOrganizationPayload:{
		clientMutationId:"String",
		enterprise:"Enterprise",
		organization:"Organization",
		viewer:"User"
	},
	RemoveEnterpriseSupportEntitlementPayload:{
		clientMutationId:"String",
		message:"String"
	},
	RemoveLabelsFromLabelablePayload:{
		clientMutationId:"String",
		labelable:"Labelable"
	},
	RemoveOutsideCollaboratorPayload:{
		clientMutationId:"String",
		removedUser:"User"
	},
	RemoveReactionPayload:{
		clientMutationId:"String",
		reaction:"Reaction",
		reactionGroups:"ReactionGroup",
		subject:"Reactable"
	},
	RemoveStarPayload:{
		clientMutationId:"String",
		starrable:"Starrable"
	},
	RemoveSubIssuePayload:{
		clientMutationId:"String",
		issue:"Issue",
		subIssue:"Issue"
	},
	RemoveUpvotePayload:{
		clientMutationId:"String",
		subject:"Votable"
	},
	RemovedFromMergeQueueEvent:{
		actor:"Actor",
		beforeCommit:"Commit",
		createdAt:"DateTime",
		enqueuer:"User",
		id:"ID",
		mergeQueue:"MergeQueue",
		pullRequest:"PullRequest",
		reason:"String"
	},
	RemovedFromProjectEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		databaseId:"Int",
		id:"ID",
		project:"Project",
		projectColumnName:"String"
	},
	RenamedTitleEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		currentTitle:"String",
		id:"ID",
		previousTitle:"String",
		subject:"RenamedTitleSubject"
	},
	RenamedTitleSubject:{
		"...on Issue":"Issue",
		"...on PullRequest":"PullRequest"
	},
	ReopenDiscussionPayload:{
		clientMutationId:"String",
		discussion:"Discussion"
	},
	ReopenIssuePayload:{
		clientMutationId:"String",
		issue:"Issue"
	},
	ReopenPullRequestPayload:{
		clientMutationId:"String",
		pullRequest:"PullRequest"
	},
	ReopenedEvent:{
		actor:"Actor",
		closable:"Closable",
		createdAt:"DateTime",
		id:"ID",
		stateReason:"IssueStateReason"
	},
	ReorderEnvironmentPayload:{
		clientMutationId:"String",
		environment:"Environment"
	},
	RepoAccessAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		repository:"Repository",
		repositoryName:"String",
		repositoryResourcePath:"URI",
		repositoryUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI",
		visibility:"RepoAccessAuditEntryVisibility"
	},
	RepoAddMemberAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		repository:"Repository",
		repositoryName:"String",
		repositoryResourcePath:"URI",
		repositoryUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI",
		visibility:"RepoAddMemberAuditEntryVisibility"
	},
	RepoAddTopicAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		repository:"Repository",
		repositoryName:"String",
		repositoryResourcePath:"URI",
		repositoryUrl:"URI",
		topic:"Topic",
		topicName:"String",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	RepoArchivedAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		repository:"Repository",
		repositoryName:"String",
		repositoryResourcePath:"URI",
		repositoryUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI",
		visibility:"RepoArchivedAuditEntryVisibility"
	},
	RepoChangeMergeSettingAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		isEnabled:"Boolean",
		mergeType:"RepoChangeMergeSettingAuditEntryMergeType",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		repository:"Repository",
		repositoryName:"String",
		repositoryResourcePath:"URI",
		repositoryUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	RepoConfigDisableAnonymousGitAccessAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		repository:"Repository",
		repositoryName:"String",
		repositoryResourcePath:"URI",
		repositoryUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	RepoConfigDisableCollaboratorsOnlyAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		repository:"Repository",
		repositoryName:"String",
		repositoryResourcePath:"URI",
		repositoryUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	RepoConfigDisableContributorsOnlyAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		repository:"Repository",
		repositoryName:"String",
		repositoryResourcePath:"URI",
		repositoryUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	RepoConfigDisableSockpuppetDisallowedAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		repository:"Repository",
		repositoryName:"String",
		repositoryResourcePath:"URI",
		repositoryUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	RepoConfigEnableAnonymousGitAccessAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		repository:"Repository",
		repositoryName:"String",
		repositoryResourcePath:"URI",
		repositoryUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	RepoConfigEnableCollaboratorsOnlyAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		repository:"Repository",
		repositoryName:"String",
		repositoryResourcePath:"URI",
		repositoryUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	RepoConfigEnableContributorsOnlyAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		repository:"Repository",
		repositoryName:"String",
		repositoryResourcePath:"URI",
		repositoryUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	RepoConfigEnableSockpuppetDisallowedAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		repository:"Repository",
		repositoryName:"String",
		repositoryResourcePath:"URI",
		repositoryUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	RepoConfigLockAnonymousGitAccessAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		repository:"Repository",
		repositoryName:"String",
		repositoryResourcePath:"URI",
		repositoryUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	RepoConfigUnlockAnonymousGitAccessAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		repository:"Repository",
		repositoryName:"String",
		repositoryResourcePath:"URI",
		repositoryUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	RepoCreateAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		forkParentName:"String",
		forkSourceName:"String",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		repository:"Repository",
		repositoryName:"String",
		repositoryResourcePath:"URI",
		repositoryUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI",
		visibility:"RepoCreateAuditEntryVisibility"
	},
	RepoDestroyAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		repository:"Repository",
		repositoryName:"String",
		repositoryResourcePath:"URI",
		repositoryUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI",
		visibility:"RepoDestroyAuditEntryVisibility"
	},
	RepoRemoveMemberAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		repository:"Repository",
		repositoryName:"String",
		repositoryResourcePath:"URI",
		repositoryUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI",
		visibility:"RepoRemoveMemberAuditEntryVisibility"
	},
	RepoRemoveTopicAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		repository:"Repository",
		repositoryName:"String",
		repositoryResourcePath:"URI",
		repositoryUrl:"URI",
		topic:"Topic",
		topicName:"String",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	Repository:{
		allowUpdateBranch:"Boolean",
		archivedAt:"DateTime",
		assignableUsers:"UserConnection",
		autoMergeAllowed:"Boolean",
		branchProtectionRules:"BranchProtectionRuleConnection",
		codeOfConduct:"CodeOfConduct",
		codeowners:"RepositoryCodeowners",
		collaborators:"RepositoryCollaboratorConnection",
		commitComments:"CommitCommentConnection",
		contactLinks:"RepositoryContactLink",
		contributingGuidelines:"ContributingGuidelines",
		createdAt:"DateTime",
		databaseId:"Int",
		defaultBranchRef:"Ref",
		deleteBranchOnMerge:"Boolean",
		dependencyGraphManifests:"DependencyGraphManifestConnection",
		deployKeys:"DeployKeyConnection",
		deployments:"DeploymentConnection",
		description:"String",
		descriptionHTML:"HTML",
		discussion:"Discussion",
		discussionCategories:"DiscussionCategoryConnection",
		discussionCategory:"DiscussionCategory",
		discussions:"DiscussionConnection",
		diskUsage:"Int",
		environment:"Environment",
		environments:"EnvironmentConnection",
		forkCount:"Int",
		forkingAllowed:"Boolean",
		forks:"RepositoryConnection",
		fundingLinks:"FundingLink",
		hasDiscussionsEnabled:"Boolean",
		hasIssuesEnabled:"Boolean",
		hasProjectsEnabled:"Boolean",
		hasSponsorshipsEnabled:"Boolean",
		hasVulnerabilityAlertsEnabled:"Boolean",
		hasWikiEnabled:"Boolean",
		homepageUrl:"URI",
		id:"ID",
		interactionAbility:"RepositoryInteractionAbility",
		isArchived:"Boolean",
		isBlankIssuesEnabled:"Boolean",
		isDisabled:"Boolean",
		isEmpty:"Boolean",
		isFork:"Boolean",
		isInOrganization:"Boolean",
		isLocked:"Boolean",
		isMirror:"Boolean",
		isPrivate:"Boolean",
		isSecurityPolicyEnabled:"Boolean",
		isTemplate:"Boolean",
		isUserConfigurationRepository:"Boolean",
		issue:"Issue",
		issueOrPullRequest:"IssueOrPullRequest",
		issueTemplates:"IssueTemplate",
		issues:"IssueConnection",
		label:"Label",
		labels:"LabelConnection",
		languages:"LanguageConnection",
		latestRelease:"Release",
		licenseInfo:"License",
		lockReason:"RepositoryLockReason",
		mentionableUsers:"UserConnection",
		mergeCommitAllowed:"Boolean",
		mergeCommitMessage:"MergeCommitMessage",
		mergeCommitTitle:"MergeCommitTitle",
		mergeQueue:"MergeQueue",
		milestone:"Milestone",
		milestones:"MilestoneConnection",
		mirrorUrl:"URI",
		name:"String",
		nameWithOwner:"String",
		object:"GitObject",
		openGraphImageUrl:"URI",
		owner:"RepositoryOwner",
		packages:"PackageConnection",
		parent:"Repository",
		pinnedDiscussions:"PinnedDiscussionConnection",
		pinnedEnvironments:"PinnedEnvironmentConnection",
		pinnedIssues:"PinnedIssueConnection",
		planFeatures:"RepositoryPlanFeatures",
		primaryLanguage:"Language",
		project:"Project",
		projectV2:"ProjectV2",
		projects:"ProjectConnection",
		projectsResourcePath:"URI",
		projectsUrl:"URI",
		projectsV2:"ProjectV2Connection",
		pullRequest:"PullRequest",
		pullRequestTemplates:"PullRequestTemplate",
		pullRequests:"PullRequestConnection",
		pushedAt:"DateTime",
		rebaseMergeAllowed:"Boolean",
		recentProjects:"ProjectV2Connection",
		ref:"Ref",
		refs:"RefConnection",
		release:"Release",
		releases:"ReleaseConnection",
		repositoryTopics:"RepositoryTopicConnection",
		resourcePath:"URI",
		ruleset:"RepositoryRuleset",
		rulesets:"RepositoryRulesetConnection",
		securityPolicyUrl:"URI",
		shortDescriptionHTML:"HTML",
		squashMergeAllowed:"Boolean",
		squashMergeCommitMessage:"SquashMergeCommitMessage",
		squashMergeCommitTitle:"SquashMergeCommitTitle",
		squashPrTitleUsedAsDefault:"Boolean",
		sshUrl:"GitSSHRemote",
		stargazerCount:"Int",
		stargazers:"StargazerConnection",
		submodules:"SubmoduleConnection",
		tempCloneToken:"String",
		templateRepository:"Repository",
		updatedAt:"DateTime",
		url:"URI",
		usesCustomOpenGraphImage:"Boolean",
		viewerCanAdminister:"Boolean",
		viewerCanCreateProjects:"Boolean",
		viewerCanSubscribe:"Boolean",
		viewerCanUpdateTopics:"Boolean",
		viewerDefaultCommitEmail:"String",
		viewerDefaultMergeMethod:"PullRequestMergeMethod",
		viewerHasStarred:"Boolean",
		viewerPermission:"RepositoryPermission",
		viewerPossibleCommitEmails:"String",
		viewerSubscription:"SubscriptionState",
		visibility:"RepositoryVisibility",
		vulnerabilityAlert:"RepositoryVulnerabilityAlert",
		vulnerabilityAlerts:"RepositoryVulnerabilityAlertConnection",
		watchers:"UserConnection",
		webCommitSignoffRequired:"Boolean"
	},
	RepositoryAuditEntryData:{
		"...on OrgRestoreMemberMembershipRepositoryAuditEntryData": "OrgRestoreMemberMembershipRepositoryAuditEntryData",
		"...on PrivateRepositoryForkingDisableAuditEntry": "PrivateRepositoryForkingDisableAuditEntry",
		"...on PrivateRepositoryForkingEnableAuditEntry": "PrivateRepositoryForkingEnableAuditEntry",
		"...on RepoAccessAuditEntry": "RepoAccessAuditEntry",
		"...on RepoAddMemberAuditEntry": "RepoAddMemberAuditEntry",
		"...on RepoAddTopicAuditEntry": "RepoAddTopicAuditEntry",
		"...on RepoArchivedAuditEntry": "RepoArchivedAuditEntry",
		"...on RepoChangeMergeSettingAuditEntry": "RepoChangeMergeSettingAuditEntry",
		"...on RepoConfigDisableAnonymousGitAccessAuditEntry": "RepoConfigDisableAnonymousGitAccessAuditEntry",
		"...on RepoConfigDisableCollaboratorsOnlyAuditEntry": "RepoConfigDisableCollaboratorsOnlyAuditEntry",
		"...on RepoConfigDisableContributorsOnlyAuditEntry": "RepoConfigDisableContributorsOnlyAuditEntry",
		"...on RepoConfigDisableSockpuppetDisallowedAuditEntry": "RepoConfigDisableSockpuppetDisallowedAuditEntry",
		"...on RepoConfigEnableAnonymousGitAccessAuditEntry": "RepoConfigEnableAnonymousGitAccessAuditEntry",
		"...on RepoConfigEnableCollaboratorsOnlyAuditEntry": "RepoConfigEnableCollaboratorsOnlyAuditEntry",
		"...on RepoConfigEnableContributorsOnlyAuditEntry": "RepoConfigEnableContributorsOnlyAuditEntry",
		"...on RepoConfigEnableSockpuppetDisallowedAuditEntry": "RepoConfigEnableSockpuppetDisallowedAuditEntry",
		"...on RepoConfigLockAnonymousGitAccessAuditEntry": "RepoConfigLockAnonymousGitAccessAuditEntry",
		"...on RepoConfigUnlockAnonymousGitAccessAuditEntry": "RepoConfigUnlockAnonymousGitAccessAuditEntry",
		"...on RepoCreateAuditEntry": "RepoCreateAuditEntry",
		"...on RepoDestroyAuditEntry": "RepoDestroyAuditEntry",
		"...on RepoRemoveMemberAuditEntry": "RepoRemoveMemberAuditEntry",
		"...on RepoRemoveTopicAuditEntry": "RepoRemoveTopicAuditEntry",
		"...on TeamAddRepositoryAuditEntry": "TeamAddRepositoryAuditEntry",
		"...on TeamRemoveRepositoryAuditEntry": "TeamRemoveRepositoryAuditEntry",
		repository:"Repository",
		repositoryName:"String",
		repositoryResourcePath:"URI",
		repositoryUrl:"URI"
	},
	RepositoryCodeowners:{
		errors:"RepositoryCodeownersError"
	},
	RepositoryCodeownersError:{
		column:"Int",
		kind:"String",
		line:"Int",
		message:"String",
		path:"String",
		source:"String",
		suggestion:"String"
	},
	RepositoryCollaboratorConnection:{
		edges:"RepositoryCollaboratorEdge",
		nodes:"User",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	RepositoryCollaboratorEdge:{
		cursor:"String",
		node:"User",
		permission:"RepositoryPermission",
		permissionSources:"PermissionSource"
	},
	RepositoryConnection:{
		edges:"RepositoryEdge",
		nodes:"Repository",
		pageInfo:"PageInfo",
		totalCount:"Int",
		totalDiskUsage:"Int"
	},
	RepositoryContactLink:{
		about:"String",
		name:"String",
		url:"URI"
	},
	RepositoryDiscussionAuthor:{
		"...on Organization": "Organization",
		"...on User": "User",
		repositoryDiscussions:"DiscussionConnection"
	},
	RepositoryDiscussionCommentAuthor:{
		"...on Organization": "Organization",
		"...on User": "User",
		repositoryDiscussionComments:"DiscussionCommentConnection"
	},
	RepositoryEdge:{
		cursor:"String",
		node:"Repository"
	},
	RepositoryIdConditionTarget:{
		repositoryIds:"ID"
	},
	RepositoryInfo:{
		"...on Repository": "Repository",
		archivedAt:"DateTime",
		createdAt:"DateTime",
		description:"String",
		descriptionHTML:"HTML",
		forkCount:"Int",
		hasDiscussionsEnabled:"Boolean",
		hasIssuesEnabled:"Boolean",
		hasProjectsEnabled:"Boolean",
		hasSponsorshipsEnabled:"Boolean",
		hasWikiEnabled:"Boolean",
		homepageUrl:"URI",
		isArchived:"Boolean",
		isFork:"Boolean",
		isInOrganization:"Boolean",
		isLocked:"Boolean",
		isMirror:"Boolean",
		isPrivate:"Boolean",
		isTemplate:"Boolean",
		licenseInfo:"License",
		lockReason:"RepositoryLockReason",
		mirrorUrl:"URI",
		name:"String",
		nameWithOwner:"String",
		openGraphImageUrl:"URI",
		owner:"RepositoryOwner",
		pushedAt:"DateTime",
		resourcePath:"URI",
		shortDescriptionHTML:"HTML",
		updatedAt:"DateTime",
		url:"URI",
		usesCustomOpenGraphImage:"Boolean",
		visibility:"RepositoryVisibility"
	},
	RepositoryInteractionAbility:{
		expiresAt:"DateTime",
		limit:"RepositoryInteractionLimit",
		origin:"RepositoryInteractionLimitOrigin"
	},
	RepositoryInvitation:{
		email:"String",
		id:"ID",
		invitee:"User",
		inviter:"User",
		permalink:"URI",
		permission:"RepositoryPermission",
		repository:"RepositoryInfo"
	},
	RepositoryInvitationConnection:{
		edges:"RepositoryInvitationEdge",
		nodes:"RepositoryInvitation",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	RepositoryInvitationEdge:{
		cursor:"String",
		node:"RepositoryInvitation"
	},
	RepositoryMigration:{
		continueOnError:"Boolean",
		createdAt:"DateTime",
		databaseId:"String",
		failureReason:"String",
		id:"ID",
		migrationLogUrl:"URI",
		migrationSource:"MigrationSource",
		repositoryName:"String",
		sourceUrl:"URI",
		state:"MigrationState",
		warningsCount:"Int"
	},
	RepositoryMigrationConnection:{
		edges:"RepositoryMigrationEdge",
		nodes:"RepositoryMigration",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	RepositoryMigrationEdge:{
		cursor:"String",
		node:"RepositoryMigration"
	},
	RepositoryNameConditionTarget:{
		exclude:"String",
		include:"String",
		protected:"Boolean"
	},
	RepositoryNode:{
		"...on CommitComment": "CommitComment",
		"...on CommitCommentThread": "CommitCommentThread",
		"...on DependabotUpdate": "DependabotUpdate",
		"...on Discussion": "Discussion",
		"...on DiscussionCategory": "DiscussionCategory",
		"...on Issue": "Issue",
		"...on IssueComment": "IssueComment",
		"...on PinnedDiscussion": "PinnedDiscussion",
		"...on PullRequest": "PullRequest",
		"...on PullRequestCommitCommentThread": "PullRequestCommitCommentThread",
		"...on PullRequestReview": "PullRequestReview",
		"...on PullRequestReviewComment": "PullRequestReviewComment",
		"...on RepositoryVulnerabilityAlert": "RepositoryVulnerabilityAlert",
		repository:"Repository"
	},
	RepositoryOwner:{
		"...on Organization": "Organization",
		"...on User": "User",
		avatarUrl:"URI",
		id:"ID",
		login:"String",
		repositories:"RepositoryConnection",
		repository:"Repository",
		resourcePath:"URI",
		url:"URI"
	},
	RepositoryPlanFeatures:{
		codeowners:"Boolean",
		draftPullRequests:"Boolean",
		maximumAssignees:"Int",
		maximumManualReviewRequests:"Int",
		teamReviewRequests:"Boolean"
	},
	RepositoryPropertyConditionTarget:{
		exclude:"PropertyTargetDefinition",
		include:"PropertyTargetDefinition"
	},
	RepositoryRule:{
		id:"ID",
		parameters:"RuleParameters",
		repositoryRuleset:"RepositoryRuleset",
		type:"RepositoryRuleType"
	},
	RepositoryRuleConditions:{
		refName:"RefNameConditionTarget",
		repositoryId:"RepositoryIdConditionTarget",
		repositoryName:"RepositoryNameConditionTarget",
		repositoryProperty:"RepositoryPropertyConditionTarget"
	},
	RepositoryRuleConnection:{
		edges:"RepositoryRuleEdge",
		nodes:"RepositoryRule",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	RepositoryRuleEdge:{
		cursor:"String",
		node:"RepositoryRule"
	},
	RepositoryRuleset:{
		bypassActors:"RepositoryRulesetBypassActorConnection",
		conditions:"RepositoryRuleConditions",
		createdAt:"DateTime",
		databaseId:"Int",
		enforcement:"RuleEnforcement",
		id:"ID",
		name:"String",
		rules:"RepositoryRuleConnection",
		source:"RuleSource",
		target:"RepositoryRulesetTarget",
		updatedAt:"DateTime"
	},
	RepositoryRulesetBypassActor:{
		actor:"BypassActor",
		bypassMode:"RepositoryRulesetBypassActorBypassMode",
		deployKey:"Boolean",
		enterpriseOwner:"Boolean",
		id:"ID",
		organizationAdmin:"Boolean",
		repositoryRoleDatabaseId:"Int",
		repositoryRoleName:"String",
		repositoryRuleset:"RepositoryRuleset"
	},
	RepositoryRulesetBypassActorConnection:{
		edges:"RepositoryRulesetBypassActorEdge",
		nodes:"RepositoryRulesetBypassActor",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	RepositoryRulesetBypassActorEdge:{
		cursor:"String",
		node:"RepositoryRulesetBypassActor"
	},
	RepositoryRulesetConnection:{
		edges:"RepositoryRulesetEdge",
		nodes:"RepositoryRuleset",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	RepositoryRulesetEdge:{
		cursor:"String",
		node:"RepositoryRuleset"
	},
	RepositoryTopic:{
		id:"ID",
		resourcePath:"URI",
		topic:"Topic",
		url:"URI"
	},
	RepositoryTopicConnection:{
		edges:"RepositoryTopicEdge",
		nodes:"RepositoryTopic",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	RepositoryTopicEdge:{
		cursor:"String",
		node:"RepositoryTopic"
	},
	RepositoryVisibilityChangeDisableAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		enterpriseResourcePath:"URI",
		enterpriseSlug:"String",
		enterpriseUrl:"URI",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	RepositoryVisibilityChangeEnableAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		enterpriseResourcePath:"URI",
		enterpriseSlug:"String",
		enterpriseUrl:"URI",
		id:"ID",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	RepositoryVulnerabilityAlert:{
		autoDismissedAt:"DateTime",
		createdAt:"DateTime",
		dependabotUpdate:"DependabotUpdate",
		dependencyScope:"RepositoryVulnerabilityAlertDependencyScope",
		dismissComment:"String",
		dismissReason:"String",
		dismissedAt:"DateTime",
		dismisser:"User",
		fixedAt:"DateTime",
		id:"ID",
		number:"Int",
		repository:"Repository",
		securityAdvisory:"SecurityAdvisory",
		securityVulnerability:"SecurityVulnerability",
		state:"RepositoryVulnerabilityAlertState",
		vulnerableManifestFilename:"String",
		vulnerableManifestPath:"String",
		vulnerableRequirements:"String"
	},
	RepositoryVulnerabilityAlertConnection:{
		edges:"RepositoryVulnerabilityAlertEdge",
		nodes:"RepositoryVulnerabilityAlert",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	RepositoryVulnerabilityAlertEdge:{
		cursor:"String",
		node:"RepositoryVulnerabilityAlert"
	},
	ReprioritizeSubIssuePayload:{
		clientMutationId:"String",
		issue:"Issue"
	},
	RequestReviewsPayload:{
		actor:"Actor",
		clientMutationId:"String",
		pullRequest:"PullRequest",
		requestedReviewersEdge:"UserEdge"
	},
	RequestedReviewer:{
		"...on Bot":"Bot",
		"...on Mannequin":"Mannequin",
		"...on Team":"Team",
		"...on User":"User"
	},
	RequestedReviewerConnection:{
		edges:"RequestedReviewerEdge",
		nodes:"RequestedReviewer",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	RequestedReviewerEdge:{
		cursor:"String",
		node:"RequestedReviewer"
	},
	RequirableByPullRequest:{
		"...on CheckRun": "CheckRun",
		"...on StatusContext": "StatusContext",
		isRequired:"Boolean"
	},
	RequiredDeploymentsParameters:{
		requiredDeploymentEnvironments:"String"
	},
	RequiredStatusCheckDescription:{
		app:"App",
		context:"String"
	},
	RequiredStatusChecksParameters:{
		doNotEnforceOnCreate:"Boolean",
		requiredStatusChecks:"StatusCheckConfiguration",
		strictRequiredStatusChecksPolicy:"Boolean"
	},
	RerequestCheckSuitePayload:{
		checkSuite:"CheckSuite",
		clientMutationId:"String"
	},
	ResolveReviewThreadPayload:{
		clientMutationId:"String",
		thread:"PullRequestReviewThread"
	},
	RestrictedContribution:{
		isRestricted:"Boolean",
		occurredAt:"DateTime",
		resourcePath:"URI",
		url:"URI",
		user:"User"
	},
	RetireSponsorsTierPayload:{
		clientMutationId:"String",
		sponsorsTier:"SponsorsTier"
	},
	RevertPullRequestPayload:{
		clientMutationId:"String",
		pullRequest:"PullRequest",
		revertPullRequest:"PullRequest"
	},
	ReviewDismissalAllowance:{
		actor:"ReviewDismissalAllowanceActor",
		branchProtectionRule:"BranchProtectionRule",
		id:"ID"
	},
	ReviewDismissalAllowanceActor:{
		"...on App":"App",
		"...on Team":"Team",
		"...on User":"User"
	},
	ReviewDismissalAllowanceConnection:{
		edges:"ReviewDismissalAllowanceEdge",
		nodes:"ReviewDismissalAllowance",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	ReviewDismissalAllowanceEdge:{
		cursor:"String",
		node:"ReviewDismissalAllowance"
	},
	ReviewDismissedEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		databaseId:"Int",
		dismissalMessage:"String",
		dismissalMessageHTML:"String",
		id:"ID",
		previousReviewState:"PullRequestReviewState",
		pullRequest:"PullRequest",
		pullRequestCommit:"PullRequestCommit",
		resourcePath:"URI",
		review:"PullRequestReview",
		url:"URI"
	},
	ReviewRequest:{
		asCodeOwner:"Boolean",
		databaseId:"Int",
		id:"ID",
		pullRequest:"PullRequest",
		requestedReviewer:"RequestedReviewer"
	},
	ReviewRequestConnection:{
		edges:"ReviewRequestEdge",
		nodes:"ReviewRequest",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	ReviewRequestEdge:{
		cursor:"String",
		node:"ReviewRequest"
	},
	ReviewRequestRemovedEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		id:"ID",
		pullRequest:"PullRequest",
		requestedReviewer:"RequestedReviewer"
	},
	ReviewRequestedEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		id:"ID",
		pullRequest:"PullRequest",
		requestedReviewer:"RequestedReviewer"
	},
	ReviewStatusHovercardContext:{
		message:"String",
		octicon:"String",
		reviewDecision:"PullRequestReviewDecision"
	},
	RevokeEnterpriseOrganizationsMigratorRolePayload:{
		clientMutationId:"String",
		organizations:"OrganizationConnection"
	},
	RevokeMigratorRolePayload:{
		clientMutationId:"String",
		success:"Boolean"
	},
	RuleParameters:{
		"...on BranchNamePatternParameters":"BranchNamePatternParameters",
		"...on CodeScanningParameters":"CodeScanningParameters",
		"...on CommitAuthorEmailPatternParameters":"CommitAuthorEmailPatternParameters",
		"...on CommitMessagePatternParameters":"CommitMessagePatternParameters",
		"...on CommitterEmailPatternParameters":"CommitterEmailPatternParameters",
		"...on FileExtensionRestrictionParameters":"FileExtensionRestrictionParameters",
		"...on FilePathRestrictionParameters":"FilePathRestrictionParameters",
		"...on MaxFilePathLengthParameters":"MaxFilePathLengthParameters",
		"...on MaxFileSizeParameters":"MaxFileSizeParameters",
		"...on MergeQueueParameters":"MergeQueueParameters",
		"...on PullRequestParameters":"PullRequestParameters",
		"...on RequiredDeploymentsParameters":"RequiredDeploymentsParameters",
		"...on RequiredStatusChecksParameters":"RequiredStatusChecksParameters",
		"...on TagNamePatternParameters":"TagNamePatternParameters",
		"...on UpdateParameters":"UpdateParameters",
		"...on WorkflowsParameters":"WorkflowsParameters"
	},
	RuleSource:{
		"...on Enterprise":"Enterprise",
		"...on Organization":"Organization",
		"...on Repository":"Repository"
	},
	SavedReply:{
		body:"String",
		bodyHTML:"HTML",
		databaseId:"Int",
		id:"ID",
		title:"String",
		user:"Actor"
	},
	SavedReplyConnection:{
		edges:"SavedReplyEdge",
		nodes:"SavedReply",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	SavedReplyEdge:{
		cursor:"String",
		node:"SavedReply"
	},
	SearchResultItem:{
		"...on App":"App",
		"...on Discussion":"Discussion",
		"...on Issue":"Issue",
		"...on MarketplaceListing":"MarketplaceListing",
		"...on Organization":"Organization",
		"...on PullRequest":"PullRequest",
		"...on Repository":"Repository",
		"...on User":"User"
	},
	SearchResultItemConnection:{
		codeCount:"Int",
		discussionCount:"Int",
		edges:"SearchResultItemEdge",
		issueCount:"Int",
		nodes:"SearchResultItem",
		pageInfo:"PageInfo",
		repositoryCount:"Int",
		userCount:"Int",
		wikiCount:"Int"
	},
	SearchResultItemEdge:{
		cursor:"String",
		node:"SearchResultItem",
		textMatches:"TextMatch"
	},
	SecurityAdvisory:{
		classification:"SecurityAdvisoryClassification",
		cvss:"CVSS",
		cwes:"CWEConnection",
		databaseId:"Int",
		description:"String",
		epss:"EPSS",
		ghsaId:"String",
		id:"ID",
		identifiers:"SecurityAdvisoryIdentifier",
		notificationsPermalink:"URI",
		origin:"String",
		permalink:"URI",
		publishedAt:"DateTime",
		references:"SecurityAdvisoryReference",
		severity:"SecurityAdvisorySeverity",
		summary:"String",
		updatedAt:"DateTime",
		vulnerabilities:"SecurityVulnerabilityConnection",
		withdrawnAt:"DateTime"
	},
	SecurityAdvisoryConnection:{
		edges:"SecurityAdvisoryEdge",
		nodes:"SecurityAdvisory",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	SecurityAdvisoryEdge:{
		cursor:"String",
		node:"SecurityAdvisory"
	},
	SecurityAdvisoryIdentifier:{
		type:"String",
		value:"String"
	},
	SecurityAdvisoryPackage:{
		ecosystem:"SecurityAdvisoryEcosystem",
		name:"String"
	},
	SecurityAdvisoryPackageVersion:{
		identifier:"String"
	},
	SecurityAdvisoryReference:{
		url:"URI"
	},
	SecurityVulnerability:{
		advisory:"SecurityAdvisory",
		firstPatchedVersion:"SecurityAdvisoryPackageVersion",
		package:"SecurityAdvisoryPackage",
		severity:"SecurityAdvisorySeverity",
		updatedAt:"DateTime",
		vulnerableVersionRange:"String"
	},
	SecurityVulnerabilityConnection:{
		edges:"SecurityVulnerabilityEdge",
		nodes:"SecurityVulnerability",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	SecurityVulnerabilityEdge:{
		cursor:"String",
		node:"SecurityVulnerability"
	},
	SetEnterpriseIdentityProviderPayload:{
		clientMutationId:"String",
		identityProvider:"EnterpriseIdentityProvider"
	},
	SetOrganizationInteractionLimitPayload:{
		clientMutationId:"String",
		organization:"Organization"
	},
	SetRepositoryInteractionLimitPayload:{
		clientMutationId:"String",
		repository:"Repository"
	},
	SetUserInteractionLimitPayload:{
		clientMutationId:"String",
		user:"User"
	},
	SmimeSignature:{
		email:"String",
		isValid:"Boolean",
		payload:"String",
		signature:"String",
		signer:"User",
		state:"GitSignatureState",
		verifiedAt:"DateTime",
		wasSignedByGitHub:"Boolean"
	},
	SocialAccount:{
		displayName:"String",
		provider:"SocialAccountProvider",
		url:"URI"
	},
	SocialAccountConnection:{
		edges:"SocialAccountEdge",
		nodes:"SocialAccount",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	SocialAccountEdge:{
		cursor:"String",
		node:"SocialAccount"
	},
	Sponsor:{
		"...on Organization":"Organization",
		"...on User":"User"
	},
	SponsorAndLifetimeValue:{
		amountInCents:"Int",
		formattedAmount:"String",
		sponsor:"Sponsorable",
		sponsorable:"Sponsorable"
	},
	SponsorAndLifetimeValueConnection:{
		edges:"SponsorAndLifetimeValueEdge",
		nodes:"SponsorAndLifetimeValue",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	SponsorAndLifetimeValueEdge:{
		cursor:"String",
		node:"SponsorAndLifetimeValue"
	},
	SponsorConnection:{
		edges:"SponsorEdge",
		nodes:"Sponsor",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	SponsorEdge:{
		cursor:"String",
		node:"Sponsor"
	},
	Sponsorable:{
		"...on Organization": "Organization",
		"...on User": "User",
		estimatedNextSponsorsPayoutInCents:"Int",
		hasSponsorsListing:"Boolean",
		isSponsoredBy:"Boolean",
		isSponsoringViewer:"Boolean",
		lifetimeReceivedSponsorshipValues:"SponsorAndLifetimeValueConnection",
		monthlyEstimatedSponsorsIncomeInCents:"Int",
		sponsoring:"SponsorConnection",
		sponsors:"SponsorConnection",
		sponsorsActivities:"SponsorsActivityConnection",
		sponsorsListing:"SponsorsListing",
		sponsorshipForViewerAsSponsor:"Sponsorship",
		sponsorshipForViewerAsSponsorable:"Sponsorship",
		sponsorshipNewsletters:"SponsorshipNewsletterConnection",
		sponsorshipsAsMaintainer:"SponsorshipConnection",
		sponsorshipsAsSponsor:"SponsorshipConnection",
		totalSponsorshipAmountAsSponsorInCents:"Int",
		viewerCanSponsor:"Boolean",
		viewerIsSponsoring:"Boolean"
	},
	SponsorableItem:{
		"...on Organization":"Organization",
		"...on User":"User"
	},
	SponsorableItemConnection:{
		edges:"SponsorableItemEdge",
		nodes:"SponsorableItem",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	SponsorableItemEdge:{
		cursor:"String",
		node:"SponsorableItem"
	},
	SponsorsActivity:{
		action:"SponsorsActivityAction",
		currentPrivacyLevel:"SponsorshipPrivacy",
		id:"ID",
		paymentSource:"SponsorshipPaymentSource",
		previousSponsorsTier:"SponsorsTier",
		sponsor:"Sponsor",
		sponsorable:"Sponsorable",
		sponsorsTier:"SponsorsTier",
		timestamp:"DateTime",
		viaBulkSponsorship:"Boolean"
	},
	SponsorsActivityConnection:{
		edges:"SponsorsActivityEdge",
		nodes:"SponsorsActivity",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	SponsorsActivityEdge:{
		cursor:"String",
		node:"SponsorsActivity"
	},
	SponsorsGoal:{
		description:"String",
		kind:"SponsorsGoalKind",
		percentComplete:"Int",
		targetValue:"Int",
		title:"String"
	},
	SponsorsListing:{
		activeGoal:"SponsorsGoal",
		activeStripeConnectAccount:"StripeConnectAccount",
		billingCountryOrRegion:"String",
		contactEmailAddress:"String",
		createdAt:"DateTime",
		dashboardResourcePath:"URI",
		dashboardUrl:"URI",
		featuredItems:"SponsorsListingFeaturedItem",
		fiscalHost:"Organization",
		fullDescription:"String",
		fullDescriptionHTML:"HTML",
		id:"ID",
		isPublic:"Boolean",
		name:"String",
		nextPayoutDate:"Date",
		residenceCountryOrRegion:"String",
		resourcePath:"URI",
		shortDescription:"String",
		slug:"String",
		sponsorable:"Sponsorable",
		tiers:"SponsorsTierConnection",
		url:"URI"
	},
	SponsorsListingFeatureableItem:{
		"...on Repository":"Repository",
		"...on User":"User"
	},
	SponsorsListingFeaturedItem:{
		createdAt:"DateTime",
		description:"String",
		featureable:"SponsorsListingFeatureableItem",
		id:"ID",
		position:"Int",
		sponsorsListing:"SponsorsListing",
		updatedAt:"DateTime"
	},
	SponsorsTier:{
		adminInfo:"SponsorsTierAdminInfo",
		closestLesserValueTier:"SponsorsTier",
		createdAt:"DateTime",
		description:"String",
		descriptionHTML:"HTML",
		id:"ID",
		isCustomAmount:"Boolean",
		isOneTime:"Boolean",
		monthlyPriceInCents:"Int",
		monthlyPriceInDollars:"Int",
		name:"String",
		sponsorsListing:"SponsorsListing",
		updatedAt:"DateTime"
	},
	SponsorsTierAdminInfo:{
		isDraft:"Boolean",
		isPublished:"Boolean",
		isRetired:"Boolean",
		sponsorships:"SponsorshipConnection"
	},
	SponsorsTierConnection:{
		edges:"SponsorsTierEdge",
		nodes:"SponsorsTier",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	SponsorsTierEdge:{
		cursor:"String",
		node:"SponsorsTier"
	},
	Sponsorship:{
		createdAt:"DateTime",
		id:"ID",
		isActive:"Boolean",
		isOneTimePayment:"Boolean",
		isSponsorOptedIntoEmail:"Boolean",
		maintainer:"User",
		paymentSource:"SponsorshipPaymentSource",
		privacyLevel:"SponsorshipPrivacy",
		sponsor:"User",
		sponsorEntity:"Sponsor",
		sponsorable:"Sponsorable",
		tier:"SponsorsTier",
		tierSelectedAt:"DateTime"
	},
	SponsorshipConnection:{
		edges:"SponsorshipEdge",
		nodes:"Sponsorship",
		pageInfo:"PageInfo",
		totalCount:"Int",
		totalRecurringMonthlyPriceInCents:"Int",
		totalRecurringMonthlyPriceInDollars:"Int"
	},
	SponsorshipEdge:{
		cursor:"String",
		node:"Sponsorship"
	},
	SponsorshipNewsletter:{
		author:"User",
		body:"String",
		createdAt:"DateTime",
		id:"ID",
		isPublished:"Boolean",
		sponsorable:"Sponsorable",
		subject:"String",
		updatedAt:"DateTime"
	},
	SponsorshipNewsletterConnection:{
		edges:"SponsorshipNewsletterEdge",
		nodes:"SponsorshipNewsletter",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	SponsorshipNewsletterEdge:{
		cursor:"String",
		node:"SponsorshipNewsletter"
	},
	SshSignature:{
		email:"String",
		isValid:"Boolean",
		keyFingerprint:"String",
		payload:"String",
		signature:"String",
		signer:"User",
		state:"GitSignatureState",
		verifiedAt:"DateTime",
		wasSignedByGitHub:"Boolean"
	},
	StargazerConnection:{
		edges:"StargazerEdge",
		nodes:"User",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	StargazerEdge:{
		cursor:"String",
		node:"User",
		starredAt:"DateTime"
	},
	Starrable:{
		"...on Gist": "Gist",
		"...on Repository": "Repository",
		"...on Topic": "Topic",
		id:"ID",
		stargazerCount:"Int",
		stargazers:"StargazerConnection",
		viewerHasStarred:"Boolean"
	},
	StarredRepositoryConnection:{
		edges:"StarredRepositoryEdge",
		isOverLimit:"Boolean",
		nodes:"Repository",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	StarredRepositoryEdge:{
		cursor:"String",
		node:"Repository",
		starredAt:"DateTime"
	},
	StartOrganizationMigrationPayload:{
		clientMutationId:"String",
		orgMigration:"OrganizationMigration"
	},
	StartRepositoryMigrationPayload:{
		clientMutationId:"String",
		repositoryMigration:"RepositoryMigration"
	},
	Status:{
		combinedContexts:"StatusCheckRollupContextConnection",
		commit:"Commit",
		context:"StatusContext",
		contexts:"StatusContext",
		id:"ID",
		state:"StatusState"
	},
	StatusCheckConfiguration:{
		context:"String",
		integrationId:"Int"
	},
	StatusCheckRollup:{
		commit:"Commit",
		contexts:"StatusCheckRollupContextConnection",
		id:"ID",
		state:"StatusState"
	},
	StatusCheckRollupContext:{
		"...on CheckRun":"CheckRun",
		"...on StatusContext":"StatusContext"
	},
	StatusCheckRollupContextConnection:{
		checkRunCount:"Int",
		checkRunCountsByState:"CheckRunStateCount",
		edges:"StatusCheckRollupContextEdge",
		nodes:"StatusCheckRollupContext",
		pageInfo:"PageInfo",
		statusContextCount:"Int",
		statusContextCountsByState:"StatusContextStateCount",
		totalCount:"Int"
	},
	StatusCheckRollupContextEdge:{
		cursor:"String",
		node:"StatusCheckRollupContext"
	},
	StatusContext:{
		avatarUrl:"URI",
		commit:"Commit",
		context:"String",
		createdAt:"DateTime",
		creator:"Actor",
		description:"String",
		id:"ID",
		isRequired:"Boolean",
		state:"StatusState",
		targetUrl:"URI"
	},
	StatusContextStateCount:{
		count:"Int",
		state:"StatusState"
	},
	StripeConnectAccount:{
		accountId:"String",
		billingCountryOrRegion:"String",
		countryOrRegion:"String",
		isActive:"Boolean",
		sponsorsListing:"SponsorsListing",
		stripeDashboardUrl:"URI"
	},
	SubIssuesSummary:{
		completed:"Int",
		percentCompleted:"Int",
		total:"Int"
	},
	SubmitPullRequestReviewPayload:{
		clientMutationId:"String",
		pullRequestReview:"PullRequestReview"
	},
	Submodule:{
		branch:"String",
		gitUrl:"URI",
		name:"String",
		nameRaw:"Base64String",
		path:"String",
		pathRaw:"Base64String",
		subprojectCommitOid:"GitObjectID"
	},
	SubmoduleConnection:{
		edges:"SubmoduleEdge",
		nodes:"Submodule",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	SubmoduleEdge:{
		cursor:"String",
		node:"Submodule"
	},
	Subscribable:{
		"...on Commit": "Commit",
		"...on Discussion": "Discussion",
		"...on Issue": "Issue",
		"...on PullRequest": "PullRequest",
		"...on Repository": "Repository",
		"...on Team": "Team",
		"...on TeamDiscussion": "TeamDiscussion",
		id:"ID",
		viewerCanSubscribe:"Boolean",
		viewerSubscription:"SubscriptionState"
	},
	SubscribableThread:{
		"...on Issue": "Issue",
		id:"ID",
		viewerThreadSubscriptionFormAction:"ThreadSubscriptionFormAction",
		viewerThreadSubscriptionStatus:"ThreadSubscriptionState"
	},
	SubscribedEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		id:"ID",
		subscribable:"Subscribable"
	},
	SuggestedReviewer:{
		isAuthor:"Boolean",
		isCommenter:"Boolean",
		reviewer:"User"
	},
	Tag:{
		abbreviatedOid:"String",
		commitResourcePath:"URI",
		commitUrl:"URI",
		id:"ID",
		message:"String",
		name:"String",
		oid:"GitObjectID",
		repository:"Repository",
		tagger:"GitActor",
		target:"GitObject"
	},
	TagNamePatternParameters:{
		name:"String",
		negate:"Boolean",
		operator:"String",
		pattern:"String"
	},
	Team:{
		ancestors:"TeamConnection",
		avatarUrl:"URI",
		childTeams:"TeamConnection",
		combinedSlug:"String",
		createdAt:"DateTime",
		databaseId:"Int",
		description:"String",
		discussion:"TeamDiscussion",
		discussions:"TeamDiscussionConnection",
		discussionsResourcePath:"URI",
		discussionsUrl:"URI",
		editTeamResourcePath:"URI",
		editTeamUrl:"URI",
		id:"ID",
		invitations:"OrganizationInvitationConnection",
		memberStatuses:"UserStatusConnection",
		members:"TeamMemberConnection",
		membersResourcePath:"URI",
		membersUrl:"URI",
		name:"String",
		newTeamResourcePath:"URI",
		newTeamUrl:"URI",
		notificationSetting:"TeamNotificationSetting",
		organization:"Organization",
		parentTeam:"Team",
		privacy:"TeamPrivacy",
		projectV2:"ProjectV2",
		projectsV2:"ProjectV2Connection",
		repositories:"TeamRepositoryConnection",
		repositoriesResourcePath:"URI",
		repositoriesUrl:"URI",
		resourcePath:"URI",
		reviewRequestDelegationAlgorithm:"TeamReviewAssignmentAlgorithm",
		reviewRequestDelegationEnabled:"Boolean",
		reviewRequestDelegationMemberCount:"Int",
		reviewRequestDelegationNotifyTeam:"Boolean",
		slug:"String",
		teamsResourcePath:"URI",
		teamsUrl:"URI",
		updatedAt:"DateTime",
		url:"URI",
		viewerCanAdminister:"Boolean",
		viewerCanSubscribe:"Boolean",
		viewerSubscription:"SubscriptionState"
	},
	TeamAddMemberAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		isLdapMapped:"Boolean",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		team:"Team",
		teamName:"String",
		teamResourcePath:"URI",
		teamUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	TeamAddRepositoryAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		isLdapMapped:"Boolean",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		repository:"Repository",
		repositoryName:"String",
		repositoryResourcePath:"URI",
		repositoryUrl:"URI",
		team:"Team",
		teamName:"String",
		teamResourcePath:"URI",
		teamUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	TeamAuditEntryData:{
		"...on OrgRestoreMemberMembershipTeamAuditEntryData": "OrgRestoreMemberMembershipTeamAuditEntryData",
		"...on TeamAddMemberAuditEntry": "TeamAddMemberAuditEntry",
		"...on TeamAddRepositoryAuditEntry": "TeamAddRepositoryAuditEntry",
		"...on TeamChangeParentTeamAuditEntry": "TeamChangeParentTeamAuditEntry",
		"...on TeamRemoveMemberAuditEntry": "TeamRemoveMemberAuditEntry",
		"...on TeamRemoveRepositoryAuditEntry": "TeamRemoveRepositoryAuditEntry",
		team:"Team",
		teamName:"String",
		teamResourcePath:"URI",
		teamUrl:"URI"
	},
	TeamChangeParentTeamAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		isLdapMapped:"Boolean",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		parentTeam:"Team",
		parentTeamName:"String",
		parentTeamNameWas:"String",
		parentTeamResourcePath:"URI",
		parentTeamUrl:"URI",
		parentTeamWas:"Team",
		parentTeamWasResourcePath:"URI",
		parentTeamWasUrl:"URI",
		team:"Team",
		teamName:"String",
		teamResourcePath:"URI",
		teamUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	TeamConnection:{
		edges:"TeamEdge",
		nodes:"Team",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	TeamDiscussion:{
		author:"Actor",
		authorAssociation:"CommentAuthorAssociation",
		body:"String",
		bodyHTML:"HTML",
		bodyText:"String",
		bodyVersion:"String",
		comments:"TeamDiscussionCommentConnection",
		commentsResourcePath:"URI",
		commentsUrl:"URI",
		createdAt:"DateTime",
		createdViaEmail:"Boolean",
		databaseId:"Int",
		editor:"Actor",
		id:"ID",
		includesCreatedEdit:"Boolean",
		isPinned:"Boolean",
		isPrivate:"Boolean",
		lastEditedAt:"DateTime",
		number:"Int",
		publishedAt:"DateTime",
		reactionGroups:"ReactionGroup",
		reactions:"ReactionConnection",
		resourcePath:"URI",
		team:"Team",
		title:"String",
		updatedAt:"DateTime",
		url:"URI",
		userContentEdits:"UserContentEditConnection",
		viewerCanDelete:"Boolean",
		viewerCanPin:"Boolean",
		viewerCanReact:"Boolean",
		viewerCanSubscribe:"Boolean",
		viewerCanUpdate:"Boolean",
		viewerCannotUpdateReasons:"CommentCannotUpdateReason",
		viewerDidAuthor:"Boolean",
		viewerSubscription:"SubscriptionState"
	},
	TeamDiscussionComment:{
		author:"Actor",
		authorAssociation:"CommentAuthorAssociation",
		body:"String",
		bodyHTML:"HTML",
		bodyText:"String",
		bodyVersion:"String",
		createdAt:"DateTime",
		createdViaEmail:"Boolean",
		databaseId:"Int",
		discussion:"TeamDiscussion",
		editor:"Actor",
		id:"ID",
		includesCreatedEdit:"Boolean",
		lastEditedAt:"DateTime",
		number:"Int",
		publishedAt:"DateTime",
		reactionGroups:"ReactionGroup",
		reactions:"ReactionConnection",
		resourcePath:"URI",
		updatedAt:"DateTime",
		url:"URI",
		userContentEdits:"UserContentEditConnection",
		viewerCanDelete:"Boolean",
		viewerCanReact:"Boolean",
		viewerCanUpdate:"Boolean",
		viewerCannotUpdateReasons:"CommentCannotUpdateReason",
		viewerDidAuthor:"Boolean"
	},
	TeamDiscussionCommentConnection:{
		edges:"TeamDiscussionCommentEdge",
		nodes:"TeamDiscussionComment",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	TeamDiscussionCommentEdge:{
		cursor:"String",
		node:"TeamDiscussionComment"
	},
	TeamDiscussionConnection:{
		edges:"TeamDiscussionEdge",
		nodes:"TeamDiscussion",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	TeamDiscussionEdge:{
		cursor:"String",
		node:"TeamDiscussion"
	},
	TeamEdge:{
		cursor:"String",
		node:"Team"
	},
	TeamMemberConnection:{
		edges:"TeamMemberEdge",
		nodes:"User",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	TeamMemberEdge:{
		cursor:"String",
		memberAccessResourcePath:"URI",
		memberAccessUrl:"URI",
		node:"User",
		role:"TeamMemberRole"
	},
	TeamRemoveMemberAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		isLdapMapped:"Boolean",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		team:"Team",
		teamName:"String",
		teamResourcePath:"URI",
		teamUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	TeamRemoveRepositoryAuditEntry:{
		action:"String",
		actor:"AuditEntryActor",
		actorIp:"String",
		actorLocation:"ActorLocation",
		actorLogin:"String",
		actorResourcePath:"URI",
		actorUrl:"URI",
		createdAt:"PreciseDateTime",
		id:"ID",
		isLdapMapped:"Boolean",
		operationType:"OperationType",
		organization:"Organization",
		organizationName:"String",
		organizationResourcePath:"URI",
		organizationUrl:"URI",
		repository:"Repository",
		repositoryName:"String",
		repositoryResourcePath:"URI",
		repositoryUrl:"URI",
		team:"Team",
		teamName:"String",
		teamResourcePath:"URI",
		teamUrl:"URI",
		user:"User",
		userLogin:"String",
		userResourcePath:"URI",
		userUrl:"URI"
	},
	TeamRepositoryConnection:{
		edges:"TeamRepositoryEdge",
		nodes:"Repository",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	TeamRepositoryEdge:{
		cursor:"String",
		node:"Repository",
		permission:"RepositoryPermission"
	},
	TextMatch:{
		fragment:"String",
		highlights:"TextMatchHighlight",
		property:"String"
	},
	TextMatchHighlight:{
		beginIndice:"Int",
		endIndice:"Int",
		text:"String"
	},
	Topic:{
		id:"ID",
		name:"String",
		relatedTopics:"Topic",
		repositories:"RepositoryConnection",
		stargazerCount:"Int",
		stargazers:"StargazerConnection",
		viewerHasStarred:"Boolean"
	},
	TopicAuditEntryData:{
		"...on RepoAddTopicAuditEntry": "RepoAddTopicAuditEntry",
		"...on RepoRemoveTopicAuditEntry": "RepoRemoveTopicAuditEntry",
		topic:"Topic",
		topicName:"String"
	},
	TransferEnterpriseOrganizationPayload:{
		clientMutationId:"String",
		organization:"Organization"
	},
	TransferIssuePayload:{
		clientMutationId:"String",
		issue:"Issue"
	},
	TransferredEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		fromRepository:"Repository",
		id:"ID",
		issue:"Issue"
	},
	Tree:{
		abbreviatedOid:"String",
		commitResourcePath:"URI",
		commitUrl:"URI",
		entries:"TreeEntry",
		id:"ID",
		oid:"GitObjectID",
		repository:"Repository"
	},
	TreeEntry:{
		extension:"String",
		isGenerated:"Boolean",
		language:"Language",
		lineCount:"Int",
		mode:"Int",
		name:"String",
		nameRaw:"Base64String",
		object:"GitObject",
		oid:"GitObjectID",
		path:"String",
		pathRaw:"Base64String",
		repository:"Repository",
		size:"Int",
		submodule:"Submodule",
		type:"String"
	},
	URI: `scalar.URI` as const,
	UnarchiveProjectV2ItemPayload:{
		clientMutationId:"String",
		item:"ProjectV2Item"
	},
	UnarchiveRepositoryPayload:{
		clientMutationId:"String",
		repository:"Repository"
	},
	UnassignedEvent:{
		actor:"Actor",
		assignable:"Assignable",
		assignee:"Assignee",
		createdAt:"DateTime",
		id:"ID",
		user:"User"
	},
	UnfollowOrganizationPayload:{
		clientMutationId:"String",
		organization:"Organization"
	},
	UnfollowUserPayload:{
		clientMutationId:"String",
		user:"User"
	},
	UniformResourceLocatable:{
		"...on Bot": "Bot",
		"...on CheckRun": "CheckRun",
		"...on ClosedEvent": "ClosedEvent",
		"...on Commit": "Commit",
		"...on ConvertToDraftEvent": "ConvertToDraftEvent",
		"...on CrossReferencedEvent": "CrossReferencedEvent",
		"...on Gist": "Gist",
		"...on Issue": "Issue",
		"...on Mannequin": "Mannequin",
		"...on MergedEvent": "MergedEvent",
		"...on Milestone": "Milestone",
		"...on Organization": "Organization",
		"...on PullRequest": "PullRequest",
		"...on PullRequestCommit": "PullRequestCommit",
		"...on ReadyForReviewEvent": "ReadyForReviewEvent",
		"...on Release": "Release",
		"...on Repository": "Repository",
		"...on RepositoryTopic": "RepositoryTopic",
		"...on ReviewDismissedEvent": "ReviewDismissedEvent",
		"...on TeamDiscussion": "TeamDiscussion",
		"...on TeamDiscussionComment": "TeamDiscussionComment",
		"...on User": "User",
		"...on Workflow": "Workflow",
		"...on WorkflowRun": "WorkflowRun",
		"...on WorkflowRunFile": "WorkflowRunFile",
		resourcePath:"URI",
		url:"URI"
	},
	UnknownSignature:{
		email:"String",
		isValid:"Boolean",
		payload:"String",
		signature:"String",
		signer:"User",
		state:"GitSignatureState",
		verifiedAt:"DateTime",
		wasSignedByGitHub:"Boolean"
	},
	UnlabeledEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		id:"ID",
		label:"Label",
		labelable:"Labelable"
	},
	UnlinkProjectV2FromRepositoryPayload:{
		clientMutationId:"String",
		repository:"Repository"
	},
	UnlinkProjectV2FromTeamPayload:{
		clientMutationId:"String",
		team:"Team"
	},
	UnlinkRepositoryFromProjectPayload:{
		clientMutationId:"String",
		project:"Project",
		repository:"Repository"
	},
	UnlockLockablePayload:{
		actor:"Actor",
		clientMutationId:"String",
		unlockedRecord:"Lockable"
	},
	UnlockedEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		id:"ID",
		lockable:"Lockable"
	},
	UnmarkDiscussionCommentAsAnswerPayload:{
		clientMutationId:"String",
		discussion:"Discussion"
	},
	UnmarkFileAsViewedPayload:{
		clientMutationId:"String",
		pullRequest:"PullRequest"
	},
	UnmarkIssueAsDuplicatePayload:{
		clientMutationId:"String",
		duplicate:"IssueOrPullRequest"
	},
	UnmarkProjectV2AsTemplatePayload:{
		clientMutationId:"String",
		projectV2:"ProjectV2"
	},
	UnmarkedAsDuplicateEvent:{
		actor:"Actor",
		canonical:"IssueOrPullRequest",
		createdAt:"DateTime",
		duplicate:"IssueOrPullRequest",
		id:"ID",
		isCrossRepository:"Boolean"
	},
	UnminimizeCommentPayload:{
		clientMutationId:"String",
		unminimizedComment:"Minimizable"
	},
	UnpinIssuePayload:{
		clientMutationId:"String",
		id:"ID",
		issue:"Issue"
	},
	UnpinnedEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		id:"ID",
		issue:"Issue"
	},
	UnresolveReviewThreadPayload:{
		clientMutationId:"String",
		thread:"PullRequestReviewThread"
	},
	UnsubscribeFromNotificationsPayload:{
		clientMutationId:"String",
		success:"Boolean"
	},
	UnsubscribedEvent:{
		actor:"Actor",
		createdAt:"DateTime",
		id:"ID",
		subscribable:"Subscribable"
	},
	Updatable:{
		"...on CommitComment": "CommitComment",
		"...on Discussion": "Discussion",
		"...on DiscussionComment": "DiscussionComment",
		"...on GistComment": "GistComment",
		"...on Issue": "Issue",
		"...on IssueComment": "IssueComment",
		"...on Project": "Project",
		"...on ProjectV2": "ProjectV2",
		"...on PullRequest": "PullRequest",
		"...on PullRequestReview": "PullRequestReview",
		"...on PullRequestReviewComment": "PullRequestReviewComment",
		"...on TeamDiscussion": "TeamDiscussion",
		"...on TeamDiscussionComment": "TeamDiscussionComment",
		viewerCanUpdate:"Boolean"
	},
	UpdatableComment:{
		"...on CommitComment": "CommitComment",
		"...on DiscussionComment": "DiscussionComment",
		"...on GistComment": "GistComment",
		"...on Issue": "Issue",
		"...on IssueComment": "IssueComment",
		"...on PullRequest": "PullRequest",
		"...on PullRequestReview": "PullRequestReview",
		"...on PullRequestReviewComment": "PullRequestReviewComment",
		"...on TeamDiscussion": "TeamDiscussion",
		"...on TeamDiscussionComment": "TeamDiscussionComment",
		viewerCannotUpdateReasons:"CommentCannotUpdateReason"
	},
	UpdateBranchProtectionRulePayload:{
		branchProtectionRule:"BranchProtectionRule",
		clientMutationId:"String"
	},
	UpdateCheckRunPayload:{
		checkRun:"CheckRun",
		clientMutationId:"String"
	},
	UpdateCheckSuitePreferencesPayload:{
		clientMutationId:"String",
		repository:"Repository"
	},
	UpdateDiscussionCommentPayload:{
		clientMutationId:"String",
		comment:"DiscussionComment"
	},
	UpdateDiscussionPayload:{
		clientMutationId:"String",
		discussion:"Discussion"
	},
	UpdateEnterpriseAdministratorRolePayload:{
		clientMutationId:"String",
		message:"String"
	},
	UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload:{
		clientMutationId:"String",
		enterprise:"Enterprise",
		message:"String"
	},
	UpdateEnterpriseDefaultRepositoryPermissionSettingPayload:{
		clientMutationId:"String",
		enterprise:"Enterprise",
		message:"String"
	},
	UpdateEnterpriseDeployKeySettingPayload:{
		clientMutationId:"String",
		enterprise:"Enterprise",
		message:"String"
	},
	UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload:{
		clientMutationId:"String",
		enterprise:"Enterprise",
		message:"String"
	},
	UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload:{
		clientMutationId:"String",
		enterprise:"Enterprise",
		message:"String"
	},
	UpdateEnterpriseMembersCanDeleteIssuesSettingPayload:{
		clientMutationId:"String",
		enterprise:"Enterprise",
		message:"String"
	},
	UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload:{
		clientMutationId:"String",
		enterprise:"Enterprise",
		message:"String"
	},
	UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload:{
		clientMutationId:"String",
		enterprise:"Enterprise",
		message:"String"
	},
	UpdateEnterpriseMembersCanMakePurchasesSettingPayload:{
		clientMutationId:"String",
		enterprise:"Enterprise",
		message:"String"
	},
	UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload:{
		clientMutationId:"String",
		enterprise:"Enterprise",
		message:"String"
	},
	UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload:{
		clientMutationId:"String",
		enterprise:"Enterprise",
		message:"String"
	},
	UpdateEnterpriseOrganizationProjectsSettingPayload:{
		clientMutationId:"String",
		enterprise:"Enterprise",
		message:"String"
	},
	UpdateEnterpriseOwnerOrganizationRolePayload:{
		clientMutationId:"String",
		message:"String"
	},
	UpdateEnterpriseProfilePayload:{
		clientMutationId:"String",
		enterprise:"Enterprise"
	},
	UpdateEnterpriseRepositoryProjectsSettingPayload:{
		clientMutationId:"String",
		enterprise:"Enterprise",
		message:"String"
	},
	UpdateEnterpriseTeamDiscussionsSettingPayload:{
		clientMutationId:"String",
		enterprise:"Enterprise",
		message:"String"
	},
	UpdateEnterpriseTwoFactorAuthenticationDisallowedMethodsSettingPayload:{
		clientMutationId:"String",
		enterprise:"Enterprise",
		message:"String"
	},
	UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload:{
		clientMutationId:"String",
		enterprise:"Enterprise",
		message:"String"
	},
	UpdateEnvironmentPayload:{
		clientMutationId:"String",
		environment:"Environment"
	},
	UpdateIpAllowListEnabledSettingPayload:{
		clientMutationId:"String",
		owner:"IpAllowListOwner"
	},
	UpdateIpAllowListEntryPayload:{
		clientMutationId:"String",
		ipAllowListEntry:"IpAllowListEntry"
	},
	UpdateIpAllowListForInstalledAppsEnabledSettingPayload:{
		clientMutationId:"String",
		owner:"IpAllowListOwner"
	},
	UpdateIssueCommentPayload:{
		clientMutationId:"String",
		issueComment:"IssueComment"
	},
	UpdateIssuePayload:{
		actor:"Actor",
		clientMutationId:"String",
		issue:"Issue"
	},
	UpdateLabelPayload:{
		clientMutationId:"String",
		label:"Label"
	},
	UpdateNotificationRestrictionSettingPayload:{
		clientMutationId:"String",
		owner:"VerifiableDomainOwner"
	},
	UpdateOrganizationAllowPrivateRepositoryForkingSettingPayload:{
		clientMutationId:"String",
		message:"String",
		organization:"Organization"
	},
	UpdateOrganizationWebCommitSignoffSettingPayload:{
		clientMutationId:"String",
		message:"String",
		organization:"Organization"
	},
	UpdateParameters:{
		updateAllowsFetchAndMerge:"Boolean"
	},
	UpdatePatreonSponsorabilityPayload:{
		clientMutationId:"String",
		sponsorsListing:"SponsorsListing"
	},
	UpdateProjectCardPayload:{
		clientMutationId:"String",
		projectCard:"ProjectCard"
	},
	UpdateProjectColumnPayload:{
		clientMutationId:"String",
		projectColumn:"ProjectColumn"
	},
	UpdateProjectPayload:{
		clientMutationId:"String",
		project:"Project"
	},
	UpdateProjectV2CollaboratorsPayload:{
		clientMutationId:"String",
		collaborators:"ProjectV2ActorConnection"
	},
	UpdateProjectV2DraftIssuePayload:{
		clientMutationId:"String",
		draftIssue:"DraftIssue"
	},
	UpdateProjectV2FieldPayload:{
		clientMutationId:"String",
		projectV2Field:"ProjectV2FieldConfiguration"
	},
	UpdateProjectV2ItemFieldValuePayload:{
		clientMutationId:"String",
		projectV2Item:"ProjectV2Item"
	},
	UpdateProjectV2ItemPositionPayload:{
		clientMutationId:"String",
		items:"ProjectV2ItemConnection"
	},
	UpdateProjectV2Payload:{
		clientMutationId:"String",
		projectV2:"ProjectV2"
	},
	UpdateProjectV2StatusUpdatePayload:{
		clientMutationId:"String",
		statusUpdate:"ProjectV2StatusUpdate"
	},
	UpdatePullRequestBranchPayload:{
		clientMutationId:"String",
		pullRequest:"PullRequest"
	},
	UpdatePullRequestPayload:{
		actor:"Actor",
		clientMutationId:"String",
		pullRequest:"PullRequest"
	},
	UpdatePullRequestReviewCommentPayload:{
		clientMutationId:"String",
		pullRequestReviewComment:"PullRequestReviewComment"
	},
	UpdatePullRequestReviewPayload:{
		clientMutationId:"String",
		pullRequestReview:"PullRequestReview"
	},
	UpdateRefPayload:{
		clientMutationId:"String",
		ref:"Ref"
	},
	UpdateRefsPayload:{
		clientMutationId:"String"
	},
	UpdateRepositoryPayload:{
		clientMutationId:"String",
		repository:"Repository"
	},
	UpdateRepositoryRulesetPayload:{
		clientMutationId:"String",
		ruleset:"RepositoryRuleset"
	},
	UpdateRepositoryWebCommitSignoffSettingPayload:{
		clientMutationId:"String",
		message:"String",
		repository:"Repository"
	},
	UpdateSponsorshipPreferencesPayload:{
		clientMutationId:"String",
		sponsorship:"Sponsorship"
	},
	UpdateSubscriptionPayload:{
		clientMutationId:"String",
		subscribable:"Subscribable"
	},
	UpdateTeamDiscussionCommentPayload:{
		clientMutationId:"String",
		teamDiscussionComment:"TeamDiscussionComment"
	},
	UpdateTeamDiscussionPayload:{
		clientMutationId:"String",
		teamDiscussion:"TeamDiscussion"
	},
	UpdateTeamReviewAssignmentPayload:{
		clientMutationId:"String",
		team:"Team"
	},
	UpdateTeamsRepositoryPayload:{
		clientMutationId:"String",
		repository:"Repository",
		teams:"Team"
	},
	UpdateTopicsPayload:{
		clientMutationId:"String",
		invalidTopicNames:"String",
		repository:"Repository"
	},
	UpdateUserListPayload:{
		clientMutationId:"String",
		list:"UserList"
	},
	UpdateUserListsForItemPayload:{
		clientMutationId:"String",
		item:"UserListItems",
		lists:"UserList",
		user:"User"
	},
	User:{
		anyPinnableItems:"Boolean",
		avatarUrl:"URI",
		bio:"String",
		bioHTML:"HTML",
		canReceiveOrganizationEmailsWhenNotificationsRestricted:"Boolean",
		commitComments:"CommitCommentConnection",
		company:"String",
		companyHTML:"HTML",
		contributionsCollection:"ContributionsCollection",
		copilotEndpoints:"CopilotEndpoints",
		createdAt:"DateTime",
		databaseId:"Int",
		email:"String",
		enterprises:"EnterpriseConnection",
		estimatedNextSponsorsPayoutInCents:"Int",
		followers:"FollowerConnection",
		following:"FollowingConnection",
		gist:"Gist",
		gistComments:"GistCommentConnection",
		gists:"GistConnection",
		hasSponsorsListing:"Boolean",
		hovercard:"Hovercard",
		id:"ID",
		interactionAbility:"RepositoryInteractionAbility",
		isBountyHunter:"Boolean",
		isCampusExpert:"Boolean",
		isDeveloperProgramMember:"Boolean",
		isEmployee:"Boolean",
		isFollowingViewer:"Boolean",
		isGitHubStar:"Boolean",
		isHireable:"Boolean",
		isSiteAdmin:"Boolean",
		isSponsoredBy:"Boolean",
		isSponsoringViewer:"Boolean",
		isViewer:"Boolean",
		issueComments:"IssueCommentConnection",
		issues:"IssueConnection",
		itemShowcase:"ProfileItemShowcase",
		lifetimeReceivedSponsorshipValues:"SponsorAndLifetimeValueConnection",
		lists:"UserListConnection",
		location:"String",
		login:"String",
		monthlyEstimatedSponsorsIncomeInCents:"Int",
		name:"String",
		organization:"Organization",
		organizationVerifiedDomainEmails:"String",
		organizations:"OrganizationConnection",
		packages:"PackageConnection",
		pinnableItems:"PinnableItemConnection",
		pinnedItems:"PinnableItemConnection",
		pinnedItemsRemaining:"Int",
		project:"Project",
		projectV2:"ProjectV2",
		projects:"ProjectConnection",
		projectsResourcePath:"URI",
		projectsUrl:"URI",
		projectsV2:"ProjectV2Connection",
		pronouns:"String",
		publicKeys:"PublicKeyConnection",
		pullRequests:"PullRequestConnection",
		recentProjects:"ProjectV2Connection",
		repositories:"RepositoryConnection",
		repositoriesContributedTo:"RepositoryConnection",
		repository:"Repository",
		repositoryDiscussionComments:"DiscussionCommentConnection",
		repositoryDiscussions:"DiscussionConnection",
		resourcePath:"URI",
		savedReplies:"SavedReplyConnection",
		socialAccounts:"SocialAccountConnection",
		sponsoring:"SponsorConnection",
		sponsors:"SponsorConnection",
		sponsorsActivities:"SponsorsActivityConnection",
		sponsorsListing:"SponsorsListing",
		sponsorshipForViewerAsSponsor:"Sponsorship",
		sponsorshipForViewerAsSponsorable:"Sponsorship",
		sponsorshipNewsletters:"SponsorshipNewsletterConnection",
		sponsorshipsAsMaintainer:"SponsorshipConnection",
		sponsorshipsAsSponsor:"SponsorshipConnection",
		starredRepositories:"StarredRepositoryConnection",
		status:"UserStatus",
		suggestedListNames:"UserListSuggestion",
		topRepositories:"RepositoryConnection",
		totalSponsorshipAmountAsSponsorInCents:"Int",
		twitterUsername:"String",
		updatedAt:"DateTime",
		url:"URI",
		userViewType:"UserViewType",
		viewerCanChangePinnedItems:"Boolean",
		viewerCanCreateProjects:"Boolean",
		viewerCanFollow:"Boolean",
		viewerCanSponsor:"Boolean",
		viewerIsFollowing:"Boolean",
		viewerIsSponsoring:"Boolean",
		watching:"RepositoryConnection",
		websiteUrl:"URI"
	},
	UserBlockedEvent:{
		actor:"Actor",
		blockDuration:"UserBlockDuration",
		createdAt:"DateTime",
		id:"ID",
		subject:"User"
	},
	UserConnection:{
		edges:"UserEdge",
		nodes:"User",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	UserContentEdit:{
		createdAt:"DateTime",
		deletedAt:"DateTime",
		deletedBy:"Actor",
		diff:"String",
		editedAt:"DateTime",
		editor:"Actor",
		id:"ID",
		updatedAt:"DateTime"
	},
	UserContentEditConnection:{
		edges:"UserContentEditEdge",
		nodes:"UserContentEdit",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	UserContentEditEdge:{
		cursor:"String",
		node:"UserContentEdit"
	},
	UserEdge:{
		cursor:"String",
		node:"User"
	},
	UserEmailMetadata:{
		primary:"Boolean",
		type:"String",
		value:"String"
	},
	UserList:{
		createdAt:"DateTime",
		description:"String",
		id:"ID",
		isPrivate:"Boolean",
		items:"UserListItemsConnection",
		lastAddedAt:"DateTime",
		name:"String",
		slug:"String",
		updatedAt:"DateTime",
		user:"User"
	},
	UserListConnection:{
		edges:"UserListEdge",
		nodes:"UserList",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	UserListEdge:{
		cursor:"String",
		node:"UserList"
	},
	UserListItems:{
		"...on Repository":"Repository"
	},
	UserListItemsConnection:{
		edges:"UserListItemsEdge",
		nodes:"UserListItems",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	UserListItemsEdge:{
		cursor:"String",
		node:"UserListItems"
	},
	UserListSuggestion:{
		id:"ID",
		name:"String"
	},
	UserStatus:{
		createdAt:"DateTime",
		emoji:"String",
		emojiHTML:"HTML",
		expiresAt:"DateTime",
		id:"ID",
		indicatesLimitedAvailability:"Boolean",
		message:"String",
		organization:"Organization",
		updatedAt:"DateTime",
		user:"User"
	},
	UserStatusConnection:{
		edges:"UserStatusEdge",
		nodes:"UserStatus",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	UserStatusEdge:{
		cursor:"String",
		node:"UserStatus"
	},
	VerifiableDomain:{
		createdAt:"DateTime",
		databaseId:"Int",
		dnsHostName:"URI",
		domain:"URI",
		hasFoundHostName:"Boolean",
		hasFoundVerificationToken:"Boolean",
		id:"ID",
		isApproved:"Boolean",
		isRequiredForPolicyEnforcement:"Boolean",
		isVerified:"Boolean",
		owner:"VerifiableDomainOwner",
		punycodeEncodedDomain:"URI",
		tokenExpirationTime:"DateTime",
		updatedAt:"DateTime",
		verificationToken:"String"
	},
	VerifiableDomainConnection:{
		edges:"VerifiableDomainEdge",
		nodes:"VerifiableDomain",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	VerifiableDomainEdge:{
		cursor:"String",
		node:"VerifiableDomain"
	},
	VerifiableDomainOwner:{
		"...on Enterprise":"Enterprise",
		"...on Organization":"Organization"
	},
	VerifyVerifiableDomainPayload:{
		clientMutationId:"String",
		domain:"VerifiableDomain"
	},
	ViewerHovercardContext:{
		message:"String",
		octicon:"String",
		viewer:"User"
	},
	Votable:{
		"...on Discussion": "Discussion",
		"...on DiscussionComment": "DiscussionComment",
		upvoteCount:"Int",
		viewerCanUpvote:"Boolean",
		viewerHasUpvoted:"Boolean"
	},
	Workflow:{
		createdAt:"DateTime",
		databaseId:"Int",
		id:"ID",
		name:"String",
		resourcePath:"URI",
		runs:"WorkflowRunConnection",
		state:"WorkflowState",
		updatedAt:"DateTime",
		url:"URI"
	},
	WorkflowFileReference:{
		path:"String",
		ref:"String",
		repositoryId:"Int",
		sha:"String"
	},
	WorkflowRun:{
		checkSuite:"CheckSuite",
		createdAt:"DateTime",
		databaseId:"Int",
		deploymentReviews:"DeploymentReviewConnection",
		event:"String",
		file:"WorkflowRunFile",
		id:"ID",
		pendingDeploymentRequests:"DeploymentRequestConnection",
		resourcePath:"URI",
		runNumber:"Int",
		updatedAt:"DateTime",
		url:"URI",
		workflow:"Workflow"
	},
	WorkflowRunConnection:{
		edges:"WorkflowRunEdge",
		nodes:"WorkflowRun",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	WorkflowRunEdge:{
		cursor:"String",
		node:"WorkflowRun"
	},
	WorkflowRunFile:{
		id:"ID",
		path:"String",
		repositoryFileUrl:"URI",
		repositoryName:"URI",
		resourcePath:"URI",
		run:"WorkflowRun",
		url:"URI",
		viewerCanPushRepository:"Boolean",
		viewerCanReadRepository:"Boolean"
	},
	WorkflowsParameters:{
		doNotEnforceOnCreate:"Boolean",
		workflows:"WorkflowFileReference"
	},
	X509Certificate: `scalar.X509Certificate` as const
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const
}